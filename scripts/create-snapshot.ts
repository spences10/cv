import { Daytona, Image } from '@daytonaio/sdk'
import { resolve } from 'node:path'

const SNAPSHOT_NAME = 'cv-agent'
const DB_FILENAME = 'cv-agent.db'
const DB_PATH_IN_SNAPSHOT = '/data/cv-agent.db'

async function main() {
	const db_local = resolve(import.meta.dirname, '..', DB_FILENAME)

	const daytona = new Daytona()

	// check if snapshot already exists and delete it
	try {
		const existing = await daytona.snapshot.get(SNAPSHOT_NAME)
		if (existing) {
			console.log(`Deleting existing snapshot: ${SNAPSHOT_NAME}`)
			await daytona.snapshot.delete(existing)
			// wait for deletion to propagate
			console.log('Waiting for deletion to propagate...')
			for (let i = 0; i < 30; i++) {
				await new Promise((r) => setTimeout(r, 2000))
				try {
					await daytona.snapshot.get(SNAPSHOT_NAME)
				} catch {
					console.log('Snapshot deleted.')
					break
				}
			}
		}
	} catch {
		// doesn't exist, that's fine
	}

	const image = Image.base('node:22-slim')
		.runCommands(
			'apt-get update && apt-get install -y sqlite3 && rm -rf /var/lib/apt/lists/*',
		)
		.workdir('/app')
		.runCommands('npm init -y && npm install @anthropic-ai/sdk')
		.addLocalFile(db_local, DB_PATH_IN_SNAPSHOT)

	console.log(`Creating snapshot: ${SNAPSHOT_NAME}`)
	console.log(`Baking in: ${db_local} -> ${DB_PATH_IN_SNAPSHOT}`)

	const snapshot = await daytona.snapshot.create(
		{
			name: SNAPSHOT_NAME,
			image,
			resources: { cpu: 1, memory: 1 },
		},
		{
			onLogs: (log: string) => process.stdout.write(log),
			timeout: 300,
		},
	)

	console.log(`\nSnapshot created: ${snapshot.name}`)
	console.log('Verifying...')

	// spin up a sandbox to verify the DB is accessible
	const sandbox = await daytona.create(
		{
			snapshot: SNAPSHOT_NAME,
			language: 'typescript',
			autoStopInterval: 0,
		},
		{ timeout: 60 },
	)

	const result = await sandbox.process.executeCommand(
		`sqlite3 ${DB_PATH_IN_SNAPSHOT} "SELECT COUNT(*) FROM search_index;"`,
	)

	if (result.exitCode !== 0) {
		console.error('DB verification failed:', result.result)
		process.exit(1)
	}
	console.log(
		`DB verified: ${result.result.trim()} rows in search_index`,
	)

	const sdk_check = await sandbox.process.executeCommand(
		'node -e "require(\'@anthropic-ai/sdk\'); console.log(\'OK\')"',
		'/app',
	)
	if (sdk_check.exitCode !== 0) {
		console.error('SDK verification failed:', sdk_check.result)
		process.exit(1)
	}
	console.log('Anthropic SDK: installed')

	await sandbox.delete()
	console.log('Test sandbox cleaned up. Done.')
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})

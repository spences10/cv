#!/usr/bin/env tsx
/**
 * Create/replace a Daytona snapshot with cv-agent.db baked in.
 * Run: pnpm snapshot:create [--name cv-agent] [--db-path ./cv-agent.db] [--no-verify]
 */
import { Daytona, Image } from '@daytonaio/sdk'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { parseArgs } from 'node:util'

const { values } = parseArgs({
	options: {
		name: { type: 'string', short: 'n', default: 'cv-agent' },
		'db-path': {
			type: 'string',
			short: 'd',
			default: 'cv-agent.db',
		},
		verify: { type: 'boolean', default: true },
		'no-verify': { type: 'boolean', default: false },
		help: { type: 'boolean', short: 'h', default: false },
	},
})

if (values.help) {
	console.log(`Usage: pnpm snapshot:create [options]

Options:
  --name, -n      Snapshot name (default: cv-agent)
  --db-path, -d   Path to cv-agent.db (default: ./cv-agent.db)
  --no-verify     Skip verification after snapshot creation
  --help, -h      Show this help`)
	process.exit(0)
}

const snapshot_name = values.name ?? 'cv-agent'
const db_local = resolve(
	import.meta.dirname,
	'..',
	values['db-path'] ?? 'cv-agent.db',
)
const should_verify = !values['no-verify']
const DB_PATH_IN_SNAPSHOT = '/data/cv-agent.db'

if (!existsSync(db_local)) {
	console.error(
		`DB not found: ${db_local}\nRun 'pnpm db:regenerate' first.`,
	)
	process.exit(1)
}

async function main() {
	const daytona = new Daytona()

	// Delete existing snapshot if present
	try {
		const existing = await daytona.snapshot.get(snapshot_name)
		if (existing) {
			console.log(`Deleting existing snapshot: ${snapshot_name}`)
			await daytona.snapshot.delete(existing)
			console.log('Waiting for deletion to propagate...')
			for (let i = 0; i < 30; i++) {
				await new Promise((r) => setTimeout(r, 2000))
				try {
					await daytona.snapshot.get(snapshot_name)
				} catch {
					console.log('Snapshot deleted.')
					break
				}
			}
		}
	} catch {
		// doesn't exist, fine
	}

	const image = Image.base('node:22-slim')
		.runCommands(
			'apt-get update && apt-get install -y sqlite3 && rm -rf /var/lib/apt/lists/*',
		)
		.workdir('/app')
		.runCommands('npm init -y && npm install @anthropic-ai/sdk')
		.addLocalFile(db_local, DB_PATH_IN_SNAPSHOT)

	console.log(`Creating snapshot: ${snapshot_name}`)
	console.log(`Baking in: ${db_local} -> ${DB_PATH_IN_SNAPSHOT}`)

	const snapshot = await daytona.snapshot.create(
		{
			name: snapshot_name,
			image,
			resources: { cpu: 1, memory: 1 },
		},
		{
			onLogs: (log: string) => process.stdout.write(log),
			timeout: 300,
		},
	)

	console.log(`\nSnapshot created: ${snapshot.name}`)

	if (!should_verify) {
		console.log('Skipping verification (--no-verify).')
		return
	}

	console.log('Verifying...')

	const sandbox = await daytona.create(
		{
			snapshot: snapshot_name,
			language: 'typescript',
			autoStopInterval: 0,
		},
		{ timeout: 60 },
	)

	try {
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
			console.error(
				'SDK verification failed:',
				sdk_check.result,
			)
			process.exit(1)
		}
		console.log('Anthropic SDK: installed')
	} finally {
		await sandbox.delete()
		console.log('Test sandbox cleaned up. Done.')
	}
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})

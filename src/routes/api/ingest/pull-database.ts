import { env } from '$env/dynamic/private';
import { close_db } from '$lib/server/agent';
import Database from 'better-sqlite3';
import { existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { get_backup_dir, get_db_path } from './backup-database';

export async function pull_database(): Promise<
	Record<string, unknown>
> {
	const production_url = env.PRODUCTION_URL;
	if (!production_url) {
		throw new Error('PRODUCTION_URL not set');
	}

	const response = await fetch(
		`${production_url}/api/ingest/download`,
		{
			headers: {
				Authorization: `Bearer ${env.INGEST_TOKEN}`,
			},
		},
	);

	if (!response.ok) {
		throw new Error(
			`Download failed: ${response.status} ${response.statusText}`,
		);
	}

	const buffer = await response.arrayBuffer();
	const db_path = get_db_path();
	const backup_dir = get_backup_dir();

	const now = new Date();
	const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
	const downloaded_path = path.join(
		backup_dir,
		`cv-agent-downloaded-${ts}.db`,
	);

	writeFileSync(downloaded_path, new Uint8Array(buffer));

	// Safety backup of current DB
	let local_backup = '';
	if (existsSync(db_path)) {
		local_backup = `cv-agent-local-backup-${ts}.db`;
		const current = new Database(db_path, { readonly: true });
		await current.backup(path.join(backup_dir, local_backup));
		current.close();
	}

	// Close agent's readonly connection
	close_db();

	// Replace current with downloaded
	const downloaded = new Database(downloaded_path, {
		readonly: true,
	});
	await downloaded.backup(db_path);
	downloaded.close();

	const stats = await import('node:fs/promises').then((fs) =>
		fs.stat(db_path),
	);

	return {
		downloaded_from: production_url,
		database_size_mb: (stats.size / 1024 / 1024).toFixed(2),
		local_backup,
	};
}

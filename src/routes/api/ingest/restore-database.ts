import { close_db } from '$lib/server/agent';
import Database from 'better-sqlite3';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { get_backup_dir, get_db_path } from './backup-database';

export async function restore_database(
	backup_filename?: string,
): Promise<Record<string, unknown>> {
	const db_path = get_db_path();
	const backup_dir = get_backup_dir();

	const pattern = /^cv-agent-\d{4}-\d{2}-\d{2}-\d{4}\.db$/;
	const backups = readdirSync(backup_dir)
		.filter(
			(f) =>
				pattern.test(f) &&
				!f.includes('pre-restore') &&
				!f.includes('corrupted'),
		)
		.sort()
		.reverse();

	if (backups.length === 0) {
		throw new Error('No backups available');
	}

	const target = backup_filename || backups[0];
	const backup_path = path.join(backup_dir, target);
	if (!existsSync(backup_path)) {
		throw new Error(`Backup not found: ${target}`);
	}

	// Safety backup before restore
	let pre_restore_backup = '';
	if (existsSync(db_path)) {
		const now = new Date();
		const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
		pre_restore_backup = `cv-agent-pre-restore-${ts}.db`;
		const current = new Database(db_path, { readonly: true });
		await current.backup(path.join(backup_dir, pre_restore_backup));
		current.close();
	}

	// Close agent's readonly connection
	close_db();

	// Restore
	const backup = new Database(backup_path, { readonly: true });
	await backup.backup(db_path);
	backup.close();

	const stats = await import('node:fs/promises').then((fs) =>
		fs.stat(db_path),
	);

	return {
		restored_from: target,
		database_size_mb: (stats.size / 1024 / 1024).toFixed(2),
		pre_restore_backup,
		available_backups: backups,
	};
}

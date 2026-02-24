import { env } from '$env/dynamic/private';
import Database from 'better-sqlite3';
import {
	existsSync,
	mkdirSync,
	readdirSync,
	unlinkSync,
} from 'node:fs';
import path from 'node:path';

const MAX_BACKUPS = 28;

function get_db_path() {
	return (
		env.DB_PATH || path.join(process.cwd(), 'data', 'cv-agent.db')
	);
}

function get_backup_dir() {
	const dir =
		env.DB_BACKUP_PATH ||
		path.join(path.dirname(get_db_path()), 'backups');
	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true });
	}
	return dir;
}

function timestamp() {
	const now = new Date();
	const y = now.getFullYear();
	const m = String(now.getMonth() + 1).padStart(2, '0');
	const d = String(now.getDate()).padStart(2, '0');
	const h = String(now.getHours()).padStart(2, '0');
	const min = String(now.getMinutes()).padStart(2, '0');
	return `${y}-${m}-${d}-${h}${min}`;
}

export async function backup_database(): Promise<
	Record<string, unknown>
> {
	const db_path = get_db_path();
	if (!existsSync(db_path)) {
		throw new Error('No database file to backup');
	}

	const backup_dir = get_backup_dir();
	const filename = `cv-agent-${timestamp()}.db`;
	const backup_path = path.join(backup_dir, filename);

	const source = new Database(db_path, { readonly: true });
	await source.backup(backup_path);
	source.close();

	// Rotate old backups
	const pattern = /^cv-agent-\d{4}-\d{2}-\d{2}-\d{4}\.db$/;
	const backups = readdirSync(backup_dir)
		.filter((f) => pattern.test(f))
		.sort()
		.reverse();

	let deleted = 0;
	if (backups.length > MAX_BACKUPS) {
		for (const old of backups.slice(MAX_BACKUPS)) {
			unlinkSync(path.join(backup_dir, old));
			deleted++;
		}
	}

	const stats = await import('node:fs/promises').then((fs) =>
		fs.stat(backup_path),
	);

	return {
		filename,
		size_mb: (stats.size / 1024 / 1024).toFixed(2),
		backups_kept: Math.min(backups.length, MAX_BACKUPS),
		backups_deleted: deleted,
	};
}

export { get_backup_dir, get_db_path };

import { env } from '$env/dynamic/private';
import { close_db } from '$lib/server/agent';
import { json } from '@sveltejs/kit';
import Database from 'better-sqlite3';
import { existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { get_backup_dir, get_db_path } from '../backup-database';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const auth_header = request.headers.get('Authorization');
	const token = auth_header?.replace('Bearer ', '');

	if (!token || token !== env.INGEST_TOKEN) {
		return json({ message: 'Unauthorised' }, { status: 401 });
	}

	const buffer = await request.arrayBuffer();
	if (buffer.byteLength === 0) {
		return json({ message: 'Empty request body' }, { status: 400 });
	}

	const db_path = get_db_path();
	const backup_dir = get_backup_dir();

	const now = new Date();
	const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;

	// Write uploaded file to temp path
	const temp_path = path.join(
		backup_dir,
		`cv-agent-uploaded-${ts}.db`,
	);
	writeFileSync(temp_path, new Uint8Array(buffer));

	// Validate it's a real SQLite DB
	try {
		const test = new Database(temp_path, { readonly: true });
		const row = test
			.prepare('SELECT count(*) as n FROM search_index')
			.get() as { n: number };
		test.close();
		if (!row || row.n === 0) {
			throw new Error('search_index is empty');
		}
	} catch (err) {
		const msg =
			err instanceof Error ? err.message : 'Invalid database';
		return json(
			{ message: `Validation failed: ${msg}` },
			{ status: 400 },
		);
	}

	// Safety backup of current DB
	let pre_upload_backup = '';
	if (existsSync(db_path)) {
		pre_upload_backup = `cv-agent-pre-upload-${ts}.db`;
		const current = new Database(db_path, { readonly: true });
		await current.backup(path.join(backup_dir, pre_upload_backup));
		current.close();
	}

	// Close agent's readonly connection
	close_db();

	// Replace current DB with uploaded via SQLite backup API
	const uploaded = new Database(temp_path, { readonly: true });
	await uploaded.backup(db_path);
	uploaded.close();

	const stats = await import('node:fs/promises').then((fs) =>
		fs.stat(db_path),
	);

	return json({
		message: 'Database replaced',
		database_size_mb: (stats.size / 1024 / 1024).toFixed(2),
		pre_upload_backup,
	});
};

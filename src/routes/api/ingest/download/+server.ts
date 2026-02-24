import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { get_backup_dir } from '../backup-database';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	const auth_header = request.headers.get('authorization');
	const token = auth_header?.replace('Bearer ', '');

	if (!token || token !== env.INGEST_TOKEN) {
		throw error(401, 'Unauthorised');
	}

	const backup_dir = get_backup_dir();
	const pattern = /^cv-agent-\d{4}-\d{2}-\d{2}-\d{4}\.db$/;
	const backups = readdirSync(backup_dir)
		.filter((f) => pattern.test(f))
		.sort()
		.reverse();

	if (backups.length === 0) {
		throw error(404, 'No backups found');
	}

	const latest = backups[0];
	const file_path = `${backup_dir}/${latest}`;
	const file_buffer = readFileSync(file_path);
	const file_stats = statSync(file_path);

	return new Response(new Uint8Array(file_buffer), {
		headers: {
			'Content-Type': 'application/octet-stream',
			'Content-Disposition': `attachment; filename="${latest}"`,
			'Content-Length': file_stats.size.toString(),
		},
	});
};

import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { backup_database } from './backup-database';
import { pull_database } from './pull-database';
import { restore_database } from './restore-database';

const tasks: Record<
	string,
	{
		fn: (data?: string) => Promise<Record<string, unknown>>;
		expects_data?: boolean;
	}
> = {
	backup_database: { fn: backup_database },
	restore_database: { fn: restore_database, expects_data: true },
	pull_database: { fn: pull_database },
};

export const POST: RequestHandler = async ({ request }) => {
	const auth_header = request.headers.get('Authorization');
	const token = auth_header?.replace('Bearer ', '');

	if (!token || token !== env.INGEST_TOKEN) {
		return json({ message: 'Unauthorised' }, { status: 401 });
	}

	const body = await request.json();
	const { task, data } = body as { task: string; data?: string };

	const handler = tasks[task];
	if (!handler) {
		return json(
			{ message: `Unknown task: ${task}` },
			{ status: 400 },
		);
	}

	try {
		const result = handler.expects_data
			? await handler.fn(data)
			: await handler.fn();
		return json({ task, ...result });
	} catch (err) {
		const message =
			err instanceof Error ? err.message : 'Task failed';
		return json({ message }, { status: 500 });
	}
};

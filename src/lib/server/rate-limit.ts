const requests = new Map<string, number[]>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

export function check_rate_limit(ip: string): boolean {
	const now = Date.now();
	const timestamps = requests.get(ip) ?? [];
	const valid = timestamps.filter((t) => now - t < WINDOW_MS);

	if (valid.length >= MAX_REQUESTS) {
		requests.set(ip, valid);
		return false;
	}

	valid.push(now);
	requests.set(ip, valid);
	return true;
}

// Periodic cleanup every 5 minutes
setInterval(() => {
	const now = Date.now();
	for (const [ip, timestamps] of requests) {
		const valid = timestamps.filter((t) => now - t < WINDOW_MS);
		if (valid.length === 0) {
			requests.delete(ip);
		} else {
			requests.set(ip, valid);
		}
	}
}, 5 * 60_000).unref();

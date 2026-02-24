import { command, getRequestEvent } from '$app/server';
import { env } from '$env/dynamic/private';
import * as v from 'valibot';
import { ask_agent } from '$lib/server/agent';
import { check_rate_limit } from '$lib/server/rate-limit';

async function verify_turnstile(
	token: string,
	ip: string,
): Promise<boolean> {
	const response = await fetch(
		'https://challenges.cloudflare.com/turnstile/v0/siteverify',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				secret: env.TURNSTILE_SECRET_KEY,
				response: token,
				remoteip: ip,
			}),
		},
	);
	const data = await response.json();
	return data.success === true;
}

export const ask = command(
	v.object({
		question: v.pipe(
			v.string(),
			v.trim(),
			v.minLength(2),
			v.maxLength(500),
		),
		turnstile_token: v.string(),
	}),
	async ({ question, turnstile_token }) => {
		const event = getRequestEvent();
		const ip = event.getClientAddress();

		const verified = await verify_turnstile(turnstile_token, ip);
		if (!verified) {
			throw new Error('Failed to verify captcha. Please try again.');
		}

		if (!check_rate_limit(ip)) {
			throw new Error('Too many requests. Please wait a moment.');
		}

		const answer = await ask_agent(question);
		return { answer };
	},
);

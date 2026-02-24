import { command, getRequestEvent } from '$app/server'
import * as v from 'valibot'
import { ask_agent } from '$lib/server/agent'
import { check_rate_limit } from '$lib/server/rate-limit'

// TODO: re-add Turnstile verification once debug page confirms working combo

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
	async ({ question }) => {
		const event = getRequestEvent()
		const ip = event.getClientAddress()

		if (!check_rate_limit(ip)) {
			throw new Error('Too many requests. Please wait a moment.')
		}

		const answer = await ask_agent(question)
		return { answer }
	},
)

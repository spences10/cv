import { command, getRequestEvent } from '$app/server'
import * as v from 'valibot'
import { ask_agent } from '$lib/server/agent'
import { check_rate_limit } from '$lib/server/rate-limit'

export const ask = command(
	v.pipe(v.string(), v.trim(), v.minLength(2), v.maxLength(500)),
	async (question) => {
		const event = getRequestEvent()
		const ip = event.getClientAddress()
		if (!check_rate_limit(ip)) {
			throw new Error('Too many requests. Please wait a moment.')
		}
		const answer = await ask_agent(question)
		return { answer }
	},
)

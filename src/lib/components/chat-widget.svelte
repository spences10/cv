<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { ask } from '$lib/chat.remote';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import Send from '@lucide/svelte/icons/send';
	import * as Fathom from 'fathom-client';
	import { marked } from 'marked';
	import { Turnstile } from 'svelte-turnstile';
	import { cubicOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	marked.setOptions({ breaks: true, gfm: true });

	type Message = {
		role: 'user' | 'assistant';
		content: string;
	};

	let is_expanded = $state(true);
	let input_value = $state('');
	let messages: Message[] = $state([]);
	let is_loading = $state(false);
	let error_message = $state('');
	let messages_el = $state<HTMLDivElement>();
	let turnstile_token = $state('');
	let turnstile_reset = $state<() => void>();
	let input_el = $state<HTMLInputElement>();
	let inline_el = $state<HTMLDivElement>();
	let is_inline_visible = $state(true);

	const suggested_questions = [
		'What AI tools has Scott built?',
		'Tell me about his experience',
		'What tech stack does he use?',
	];

	$effect(() => {
		if (!inline_el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				is_inline_visible = entry.isIntersecting;
			},
			{ threshold: 0.1 },
		);

		observer.observe(inline_el);

		return () => observer.disconnect();
	});

	function scroll_to_bottom() {
		queueMicrotask(() => {
			messages_el?.scrollTo({
				top: messages_el.scrollHeight,
				behavior: 'smooth',
			});
		});
	}

	function scroll_to_chat() {
		inline_el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		is_expanded = true;
	}

	async function send_message(question: string) {
		if (!question.trim() || is_loading || !turnstile_token) return;

		if (!is_expanded) is_expanded = true;

		error_message = '';
		messages.push({ role: 'user', content: question.trim() });
		input_value = '';
		is_loading = true;
		scroll_to_bottom();

		Fathom.trackEvent('chat_message_sent');

		try {
			const { answer } = await ask({
				question: question.trim(),
				turnstile_token,
			});
			messages.push({ role: 'assistant', content: answer });
		} catch (err) {
			const msg =
				err instanceof Error ? err.message : 'Something went wrong.';
			error_message = msg;
		} finally {
			is_loading = false;
			turnstile_token = '';
			turnstile_reset?.();
			scroll_to_bottom();
			queueMicrotask(() => input_el?.focus());
		}
	}

	function handle_submit(event: Event) {
		event.preventDefault();
		send_message(input_value);
	}

	function handle_suggested(q: string) {
		Fathom.trackEvent('chat_suggested_click');
		send_message(q);
	}
</script>

<!-- Inline chat section -->
<div
	bind:this={inline_el}
	class="border-primary/20 bg-base-200/50 rounded-box mb-10 border-2 print:hidden"
>
	<!-- Header - always visible, acts as collapse toggle -->
	<button
		class="rounded-box hover:bg-base-200 flex w-full cursor-pointer items-center justify-between px-5 py-4 transition-colors"
		onclick={() => {
			is_expanded = !is_expanded;
			if (is_expanded) Fathom.trackEvent('chat_opened');
			else Fathom.trackEvent('chat_closed');
		}}
		aria-expanded={is_expanded}
		aria-controls="chat-body"
	>
		<div class="flex items-center gap-3">
			<div
				class="bg-primary text-primary-content flex h-10 w-10 items-center justify-center rounded-full"
			>
				<MessageCircle class="h-5 w-5" />
			</div>
			<div class="text-left">
				<h3 class="text-base font-bold">
					Got questions about my experience?
				</h3>
				<p class="text-base-content/60 text-sm">
					Ask my AI assistant anything
				</p>
			</div>
		</div>
		{#if is_expanded}
			<ChevronUp class="text-base-content/40 h-5 w-5" />
		{:else}
			<ChevronDown class="text-base-content/40 h-5 w-5" />
		{/if}
	</button>

	<!-- Collapsible body -->
	{#if is_expanded}
		<div
			id="chat-body"
			transition:slide={{ duration: 300, easing: cubicOut }}
		>
			<div class="border-base-content/10 border-t px-5 pt-4 pb-2">
				<!-- Messages area -->
				<!-- Suggested questions - always visible -->
				<div class="mb-3 flex flex-wrap gap-2">
					{#each suggested_questions as q, i}
						<button
							class="btn btn-outline btn-sm"
							in:fly={{
								y: 10,
								delay: 100 + i * 80,
								duration: 300,
								easing: cubicOut,
							}}
							disabled={is_loading}
							onclick={() => handle_suggested(q)}
						>
							{q}
						</button>
					{/each}
				</div>

				<!-- Messages area -->
				<div
					bind:this={messages_el}
					class="max-h-80 overflow-y-auto"
				>
					{#each messages as msg}
						<div
							class="chat {msg.role === 'user'
								? 'chat-end'
								: 'chat-start'}"
							in:fly={{ y: 8, duration: 200, easing: cubicOut }}
						>
							<div
								class="chat-bubble text-sm {msg.role === 'user'
									? 'chat-bubble-primary'
									: 'prose prose-sm'}"
							>
								{#if msg.role === 'assistant'}
									{@html marked.parse(msg.content)}
								{:else}
									{msg.content}
								{/if}
							</div>
						</div>
					{/each}

					{#if is_loading}
						<div class="chat chat-start" in:fade={{ duration: 150 }}>
							<div class="chat-bubble text-sm">
								<span class="loading loading-dots loading-sm"></span>
							</div>
						</div>
					{/if}

					{#if error_message}
						<div class="chat chat-start">
							<div class="chat-bubble chat-bubble-error text-sm">
								{error_message}
							</div>
						</div>
					{/if}
				</div>

				<!-- Input -->
				<form class="mt-3 flex gap-2" onsubmit={handle_submit}>
					<input
						bind:this={input_el}
						type="text"
						bind:value={input_value}
						placeholder="Ask about Scott's experience..."
						class="input input-bordered input-sm flex-1"
						maxlength={500}
						disabled={is_loading}
					/>
					<button
						type="submit"
						class="btn btn-primary btn-sm btn-circle"
						disabled={is_loading ||
							!input_value.trim() ||
							!turnstile_token}
						aria-label="Send message"
					>
						<Send class="h-4 w-4" />
					</button>
				</form>
				<div class="mt-2">
					<Turnstile
						siteKey={env.PUBLIC_TURNSTILE_SITE_KEY ?? ''}
						size="flexible"
						appearance="interaction-only"
						bind:reset={turnstile_reset}
						on:turnstile-callback={(e) => {
							turnstile_token = e.detail.token;
						}}
					/>
				</div>
			</div>
		</div>
	{/if}
</div>

<!-- Floating fallback button - appears when inline chat scrolls out of view -->
{#if !is_inline_visible}
	<button
		class="btn btn-primary btn-circle fixed right-6 bottom-6 z-50 shadow-lg print:hidden"
		in:fly={{ y: 20, duration: 300, easing: cubicOut }}
		out:fade={{ duration: 150 }}
		onclick={scroll_to_chat}
		aria-label="Scroll to chat"
	>
		<MessageCircle class="h-6 w-6" />
	</button>
{/if}

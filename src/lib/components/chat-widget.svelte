<script lang="ts">
	import { ask } from '$lib/chat.remote';
	import * as Fathom from 'fathom-client';
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import Send from '@lucide/svelte/icons/send';
	import X from '@lucide/svelte/icons/x';
	import { marked } from 'marked';

	marked.setOptions({ breaks: true, gfm: true });

	type Message = {
		role: 'user' | 'assistant';
		content: string;
	};

	let is_open = $state(true);
	let input_value = $state('');
	let messages: Message[] = $state([]);
	let is_loading = $state(false);
	let error_message = $state('');
	let messages_el = $state<HTMLDivElement>();
	// TODO: re-add Turnstile once debug page confirms working combo
	let turnstile_token = $state('bypass');

	const suggested_questions = [
		'What AI tools has Scott built?',
		'Tell me about his experience',
		'What tech stack does he use?',
	];

	function scroll_to_bottom() {
		queueMicrotask(() => {
			messages_el?.scrollTo({
				top: messages_el.scrollHeight,
				behavior: 'smooth',
			});
		});
	}

	async function send_message(question: string) {
		if (!question.trim() || is_loading || !turnstile_token) return;

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
			scroll_to_bottom();
		}
	}

	function handle_submit(event: Event) {
		event.preventDefault();
		send_message(input_value);
	}

	function handle_keydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && is_open) {
			is_open = false;
		}
	}

	function handle_suggested(q: string) {
		Fathom.trackEvent('chat_suggested_click');
		send_message(q);
	}
</script>

<svelte:window onkeydown={handle_keydown} />

{#if !is_open}
	<button
		class="btn btn-primary btn-circle fixed right-6 bottom-6 z-50 shadow-lg print:hidden"
		onclick={() => {
			is_open = true;
			Fathom.trackEvent('chat_opened');
		}}
		aria-label="Ask about Scott's experience"
	>
		<MessageCircle class="h-6 w-6" />
	</button>
{/if}

{#if is_open}
	<div
		class="bg-base-100 border-base-content/10 rounded-box fixed right-4 bottom-4 z-50 flex h-[500px] w-[380px] flex-col border shadow-2xl sm:right-6 sm:bottom-6 print:hidden"
	>
		<div
			class="bg-primary text-primary-content rounded-t-box flex items-center justify-between px-4 py-3"
		>
			<div>
				<h3 class="text-sm font-bold">Ask about Scott</h3>
				<p class="text-xs opacity-80">AI-powered CV assistant</p>
			</div>
			<button
				class="btn btn-ghost btn-circle btn-sm"
				onclick={() => {
					is_open = false;
					Fathom.trackEvent('chat_closed');
				}}
				aria-label="Close chat"
			>
				<X class="h-4 w-4" />
			</button>
		</div>

		<div bind:this={messages_el} class="flex-1 overflow-y-auto p-4">
			{#if messages.length === 0}
				<div class="chat chat-start">
					<div class="chat-bubble chat-bubble-neutral text-sm">
						Hi! I can answer questions about Scott's experience,
						skills, and projects. Try one of these:
					</div>
				</div>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each suggested_questions as q}
						<button
							class="btn btn-outline btn-xs"
							onclick={() => handle_suggested(q)}
						>
							{q}
						</button>
					{/each}
				</div>
			{/if}

			{#each messages as msg}
				<div
					class="chat {msg.role === 'user'
						? 'chat-end'
						: 'chat-start'}"
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
				<div class="chat chat-start">
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

		<div class="border-base-content/10 border-t p-3">
			<form class="flex gap-2" onsubmit={handle_submit}>
				<input
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
		</div>
	</div>
{/if}

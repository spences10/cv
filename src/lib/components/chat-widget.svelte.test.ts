import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import ChatWidget from './chat-widget.svelte';

vi.mock('$lib/chat.remote', () => ({
	ask: vi.fn().mockResolvedValue({ answer: 'Mock response' }),
}));

vi.mock('fathom-client', () => ({
	trackEvent: vi.fn(),
}));

vi.mock('$env/dynamic/public', () => ({
	env: { PUBLIC_TURNSTILE_SITE_KEY: '1x00000000000000000000AA' },
}));

vi.mock('svelte-turnstile', () => ({
	Turnstile: vi.fn(),
}));

describe('ChatWidget', () => {
	it('should render open by default with welcome message', async () => {
		render(ChatWidget);

		const welcome = page.getByText(
			/I can answer questions about Scott/,
		);
		await expect.element(welcome).toBeInTheDocument();
	});

	it('should show suggested questions', async () => {
		render(ChatWidget);

		const q1 = page.getByRole('button', {
			name: 'What AI tools has Scott built?',
		});
		const q2 = page.getByRole('button', {
			name: 'Tell me about his experience',
		});
		const q3 = page.getByRole('button', {
			name: 'What tech stack does he use?',
		});

		await expect.element(q1).toBeInTheDocument();
		await expect.element(q2).toBeInTheDocument();
		await expect.element(q3).toBeInTheDocument();
	});

	it('should have a text input and disabled send button', async () => {
		render(ChatWidget);

		const input = page.getByPlaceholder(
			"Ask about Scott's experience...",
		);
		const send = page.getByRole('button', { name: 'Send message' });

		await expect.element(input).toBeInTheDocument();
		await expect.element(send).toBeDisabled();
	});

	it('should have a close button', async () => {
		render(ChatWidget);

		const close = page.getByRole('button', { name: 'Close chat' });
		await expect.element(close).toBeInTheDocument();
	});

	it('should show header with title', async () => {
		render(ChatWidget);

		const title = page.getByText('Ask about Scott');
		const subtitle = page.getByText('AI-powered CV assistant');

		await expect.element(title).toBeInTheDocument();
		await expect.element(subtitle).toBeInTheDocument();
	});
});

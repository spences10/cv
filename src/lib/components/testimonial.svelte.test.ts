import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Testimonial from './testimonial.svelte';

describe('Testimonial', () => {
	const defaultProps = {
		name: 'Jane Doe',
		title: 'Engineering Manager at Tech Corp',
		date: '2026-02-24',
		relationship: 'managed Scott directly at Tech Corp',
		paragraphs: ['First paragraph.', 'Second paragraph.'],
	};

	it('renders the name, title, date and relationship', async () => {
		await render(Testimonial, defaultProps);

		await expect
			.element(page.getByText('Jane Doe'))
			.toBeInTheDocument();
		await expect
			.element(page.getByText('Engineering Manager at Tech Corp'))
			.toBeInTheDocument();
		await expect
			.element(
				page.getByText(
					'24 February 2026, managed Scott directly at Tech Corp',
				),
			)
			.toBeInTheDocument();
	});

	it('hides the rest of the testimonial until expanded', async () => {
		await render(Testimonial, defaultProps);

		await expect
			.element(page.getByText('First paragraph.'))
			.toBeVisible();
		// collapsed text stays in the DOM (for search and print) but inert
		const rest = page.getByTestId('testimonial-rest');
		await expect.element(rest).toHaveAttribute('inert');
		await expect.element(rest).toHaveTextContent('Second paragraph.');

		await page.getByRole('button', { name: '…more' }).click();

		await expect.element(rest).not.toHaveAttribute('inert');
		await expect
			.element(page.getByRole('button', { name: 'less' }))
			.toHaveAttribute('aria-expanded', 'true');
	});

	it('does not show a toggle when there is nothing to expand', async () => {
		await render(Testimonial, {
			...defaultProps,
			paragraphs: ['Only paragraph.'],
		});

		await expect
			.element(page.getByRole('button'))
			.not.toBeInTheDocument();
	});
});

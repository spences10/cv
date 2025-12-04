import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import Basics from './basics.svelte';

describe('Basics', () => {
	// Define default props
	const defaultProps = {
		name: 'John Doe',
		label: 'Software Developer',
		email: 'john@example.com',
		phone: '+1234567890',
		website: 'example.com',
		imgSrc: 'path/to/image.jpg',
	};

	it('should render the name and label', async () => {
		render(Basics, defaultProps);

		const name = page.getByText('John Doe');
		const label = page.getByText('Software Developer');

		await expect.element(name).toBeInTheDocument();
		await expect.element(label).toBeInTheDocument();
	});

	it('should render the avatar if imgSrc is provided', async () => {
		render(Basics, defaultProps);

		const avatar = page.getByAltText('John Doe');
		await expect.element(avatar).toBeInTheDocument();
	});

	it('should render email, phone, and website details', async () => {
		render(Basics, defaultProps);

		const email = page.getByRole('link', {
			name: 'john@example.com',
		});
		const phone = page.getByText('+1234567890');
		const website = page.getByRole('link', {
			name: 'example.com',
			exact: true,
		});

		await expect.element(email).toBeInTheDocument();
		await expect.element(phone).toBeInTheDocument();
		await expect.element(website).toBeInTheDocument();
	});
});

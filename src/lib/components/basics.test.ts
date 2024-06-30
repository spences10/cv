import { cleanup, render } from '@testing-library/svelte/svelte5';
import { afterEach, describe, expect, it } from 'vitest';
import Basics from './basics.svelte';

describe('Basics', () => {
	// Define default props
	const defaultProps = {
		name: 'John Doe',
		label: 'Software Developer',
		email: 'default-email@example.com',
		phone: 'default-phone-number',
		website: 'default-website.com',
		imgSrc: 'default-path/to/image.jpg',
	};

	afterEach(() => {
		cleanup();
	});

	it('should render the name and label', () => {
		const { getByText } = render(Basics, { ...defaultProps });

		const name = getByText('John Doe');
		expect(name).not.toBeNull();

		const label = getByText('Software Developer');
		expect(label).not.toBeNull();
	});

	it('should render the avatar if imgSrc is provided', () => {
		const { getByAltText } = render(Basics, {
			...defaultProps,
			imgSrc: 'path/to/image.jpg',
		});

		const avatar = getByAltText('John Doe');
		expect(avatar).not.toBeNull();
	});

	it('should render email, phone, and website details', () => {
		const { getByText } = render(Basics, {
			...defaultProps,
			email: 'john@example.com',
			phone: '+1234567890',
			website: 'example.com',
		});

		// Check email
		const email = getByText('john@example.com');
		expect(email).not.toBeNull();

		// Check phone
		const phone = getByText('+1234567890');
		expect(phone).not.toBeNull();

		// Check website
		const website = getByText('example.com');
		expect(website).not.toBeNull();
	});
});

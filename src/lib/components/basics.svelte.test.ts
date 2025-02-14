import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Basics from './basics.svelte';

// Mock $props
vi.mock('svelte', async () => {
	const actual = await vi.importActual('svelte');
	return {
		...actual,
		$props: vi.fn(),
	};
});

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

	afterEach(() => {
		cleanup();
	});

	it('should render the name and label', () => {
		render(Basics, { props: defaultProps });

		expect(screen.getByText('John Doe')).toBeTruthy();
		expect(screen.getByText('Software Developer')).toBeTruthy();
	});

	it('should render the avatar if imgSrc is provided', () => {
		render(Basics, { props: defaultProps });

		expect(screen.getByAltText('John Doe')).toBeTruthy();
	});

	it('should render email, phone, and website details', () => {
		render(Basics, { props: defaultProps });

		expect(screen.getByText('john@example.com')).toBeTruthy();
		expect(screen.getByText('+1234567890')).toBeTruthy();
		expect(screen.getByText('example.com')).toBeTruthy();
	});
});

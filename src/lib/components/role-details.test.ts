import { cleanup, render } from '@testing-library/svelte/svelte5';
import { differenceInMonths } from 'date-fns';
import { afterEach, describe, expect, it } from 'vitest';
import RoleDetails from './role-details.svelte';

describe('RoleDetails', () => {
	const defaultProps = {
		position: 'Software Developer',
		company: 'Tech Corp',
		startDate: new Date('2020-01-01'),
		endDate: new Date('2022-12-31'),
	};

	afterEach(() => {
		cleanup();
	});

	it('renders the position and company', () => {
		const { getByText } = render(RoleDetails, { ...defaultProps });

		expect(getByText('Software Developer')).not.toBeNull();
		expect(getByText('Tech Corp')).not.toBeNull();
	});

	it('formats dates correctly when both start and end dates are valid', () => {
		const { getByText } = render(RoleDetails, { ...defaultProps });

		expect(
			getByText('Jan 2020 - Dec 2022 (2yrs 11mos)'),
		).not.toBeNull();
	});

	it('shows "Present" for an invalid end date', () => {
		const { getByText } = render(RoleDetails, {
			...defaultProps,
			endDate: null,
		});

		const currentDate = new Date();
		const totalMonths = differenceInMonths(
			currentDate,
			defaultProps.startDate,
		);
		const years = Math.floor(totalMonths / 12);
		const months = totalMonths % 12;
		const durationText =
			months === 0 ? `${years}yrs` : `${years}yrs ${months}mos`;

		expect(
			getByText(`Jan 2020 - Present (${durationText})`),
		).not.toBeNull();
	});

	it('shows duration correctly for 1 year', () => {
		const { getByText } = render(RoleDetails, {
			...defaultProps,
			endDate: new Date('2021-01-01'),
		});

		expect(getByText('Jan 2020 - Jan 2021 (1yr)')).not.toBeNull();
	});

	it('shows duration correctly for 1 month', () => {
		const { getByText } = render(RoleDetails, {
			...defaultProps,
			startDate: new Date('2022-01-01'),
			endDate: new Date('2022-02-01'),
		});

		expect(getByText('Jan 2022 - Feb 2022 (1mo)')).not.toBeNull();
	});

	it('shows duration correctly for a combination of years and months', () => {
		const { getByText } = render(RoleDetails, {
			...defaultProps,
			startDate: new Date('2020-01-01'),
			endDate: new Date('2021-02-01'),
		});

		expect(getByText('Jan 2020 - Feb 2021 (1yr 1mo)')).not.toBeNull();
	});
});

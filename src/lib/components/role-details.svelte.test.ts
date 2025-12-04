import { page } from 'vitest/browser';
import { differenceInMonths } from 'date-fns';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import RoleDetails from './role-details.svelte';

describe('RoleDetails', () => {
	const defaultProps = {
		position: 'Software Developer',
		company: 'Tech Corp',
		startDate: new Date('2020-01-01'),
		endDate: new Date('2022-12-31'),
	};

	it('renders the position and company', async () => {
		render(RoleDetails, defaultProps);

		const position = page.getByText('Software Developer');
		const company = page.getByText('Tech Corp');

		await expect.element(position).toBeInTheDocument();
		await expect.element(company).toBeInTheDocument();
	});

	it('formats dates correctly when both start and end dates are valid', async () => {
		render(RoleDetails, defaultProps);

		const dateRange = page.getByText(
			'Jan 2020 - Dec 2022 (2yrs 11mos)',
		);
		await expect.element(dateRange).toBeInTheDocument();
	});

	it('shows "Present" for an invalid end date', async () => {
		render(RoleDetails, {
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
			months === 0
				? `${years}yrs`
				: `${years}yrs ${months}${months === 1 ? 'mo' : 'mos'}`;

		const dateRange = page.getByText(
			`Jan 2020 - Present (${durationText})`,
		);
		await expect.element(dateRange).toBeInTheDocument();
	});

	it('shows duration correctly for 1 year', async () => {
		render(RoleDetails, {
			...defaultProps,
			endDate: new Date('2021-01-01'),
		});

		const dateRange = page.getByText('Jan 2020 - Jan 2021 (1yr)');
		await expect.element(dateRange).toBeInTheDocument();
	});

	it('shows duration correctly for 1 month', async () => {
		render(RoleDetails, {
			...defaultProps,
			startDate: new Date('2022-01-01'),
			endDate: new Date('2022-02-01'),
		});

		const dateRange = page.getByText('Jan 2022 - Feb 2022 (1mo)');
		await expect.element(dateRange).toBeInTheDocument();
	});

	it('shows duration correctly for a combination of years and months', async () => {
		render(RoleDetails, {
			...defaultProps,
			startDate: new Date('2020-01-01'),
			endDate: new Date('2021-02-01'),
		});

		const dateRange = page.getByText('Jan 2020 - Feb 2021 (1yr 1mo)');
		await expect.element(dateRange).toBeInTheDocument();
	});
});

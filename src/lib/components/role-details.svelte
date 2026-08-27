<script lang="ts">
	import { format, intervalToDuration, isValid } from 'date-fns';

	const { position, company, startDate, endDate } = $props<{
		position: string;
		company: string;
		startDate: string | number | Date;
		endDate: string | number | Date | null;
	}>();

	const formatDates = (
		startDate: string | number | Date,
		endDate: string | number | Date,
	) => {
		const formattedStart = format(new Date(startDate), 'MMM yyyy');
		const formattedEndDate = () => {
			if (isValid(new Date(endDate))) {
				return format(new Date(endDate), 'MMM yyyy');
			} else {
				return 'Present';
			}
		};
		const intervalEndDate = endDate === '' ? new Date() : endDate;
		const { years, months } = intervalToDuration({
			start: new Date(startDate),
			end: new Date(intervalEndDate),
		});
		const yearsAndMonths = () => {
			const intervalYears = years
				? `${years}${years === 1 ? 'yr' : 'yrs'}`
				: '';
			const intervalMonths = months
				? `${months}${months === 1 ? 'mo' : 'mos'}`
				: '';

			if (intervalYears === '' && intervalMonths !== '') {
				return `(${intervalMonths})`;
			}
			if (intervalYears !== '' && intervalMonths === '') {
				return `(${intervalYears})`;
			}
			if (intervalYears !== '' && intervalMonths !== '') {
				return `(${intervalYears} ${intervalMonths})`;
			}
			return ``;
		};

		return `${formattedStart} - ${formattedEndDate()} ${yearsAndMonths()}`;
	};
</script>

<div
	class="mb-2 flex flex-col justify-between md:flex-row md:items-end print:mb-0 print:flex-row"
>
	<h2
		class="text-4xl font-bold tracking-wide text-primary print:text-2xl print:text-black"
	>
		{position}
	</h2>
	<span
		class="text-accent-focus text-2xl font-bold print:text-xl print:text-black"
	>
		{company}
	</span>
</div>

<span
	class="font-bold text-accent print:text-xs print:font-medium print:text-black"
>
	{formatDates(startDate, endDate === null ? '' : endDate)}
</span>
<div class="mb-8 print:mb-2"></div>

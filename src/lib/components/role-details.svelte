<script lang="ts">
	import dayjs from 'dayjs'
	import duration from 'dayjs/plugin/duration'
	dayjs.extend(duration)

	// Define a custom type for dayjs.Duration
	type DayjsDuration = {
		years: () => number
		months: () => number
	}

	export let position: string
	export let company: string
	export let startDate: Date
	export let endDate: string | number | Date | null

	const format_date = (
		date: string | number | Date | null,
		format: string
	): string => {
		return dayjs(date).isValid()
			? dayjs(date).format(format)
			: 'Present'
	}

	const calculate_duration = (
		start_date: string | number | Date,
		end_date: string | number | Date | null
	): DayjsDuration => {
		const interval_end_date =
			end_date === null ? new Date() : end_date
		return dayjs.duration(
			dayjs(interval_end_date).diff(dayjs(start_date))
		) as DayjsDuration
	}

	const format_duration = (duration_interval: DayjsDuration) => {
		const years = duration_interval.years()
		const months = duration_interval.months()
		const interval_years = years
			? `${years}${years === 1 ? 'yr' : 'yrs'}`
			: ''
		const interval_months = months
			? `${months}${months === 1 ? 'mo' : 'mos'}`
			: ''

		if (interval_years && interval_months)
			return `(${interval_years} ${interval_months})`
		if (interval_years) return `(${interval_years})`
		if (interval_months) return `(${interval_months})`
		return ''
	}

	const format_dates = (
		start_date: string | number | Date,
		end_date: string | number | Date | null
	) => {
		const formatted_start = format_date(start_date, 'MMM YYYY')
		const formatted_end = format_date(end_date, 'MMM YYYY')
		const duration_interval = calculate_duration(start_date, end_date)
		const formatted_duration = format_duration(duration_interval)

		return `${formatted_start} - ${formatted_end} ${formatted_duration}`
	}
</script>

<div
	class="flex flex-col md:flex-row print:flex-row justify-between md:items-end mb-2 print:mb-0"
>
	<h2
		class="text-4xl print:text-2xl font-bold tracking-wide text-primary print:text-black"
	>
		{position}
	</h2>
	<span
		class="text-2xl print:text-xl font-bold text-accent-focus print:text-black"
	>
		{company}
	</span>
</div>

<span
	class="text-accent font-bold print:font-medium print:text-black print:text-xs"
>
	{format_dates(startDate, endDate === null ? '' : endDate)}
</span>
<div class="mb-8 print:mb-2" />

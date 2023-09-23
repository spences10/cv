<script lang="ts">
	import dayjs from 'dayjs'
	import relative_time from 'dayjs/plugin/relativeTime'
	dayjs.extend(relative_time)

	export let date_from: number = Date.now()
	export let date_to: number = Date.now()

	$: distance = dayjs(date_to).from(dayjs(date_from))
</script>

<span>{distance}</span>

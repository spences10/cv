<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let date_from: number = Date.now();
	export let date_to: number = Date.now();

	$: distance = dayjs(date_to).from(dayjs(date_from), true);

	$: formatted_distance = distance.startsWith('in') ? `over ${distance.slice(3)}` : distance;
</script>

<span>{formatted_distance}</span>

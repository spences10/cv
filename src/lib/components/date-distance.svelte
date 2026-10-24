<script lang="ts">
	import { formatDistanceStrict } from 'date-fns';

	const {
		from = Date.now(),
		to = Date.now(),
	}: {
		from: string | number;
		to: string | number;
	} = $props();

	const distance = $derived(
		formatDistanceStrict(new Date(from), new Date(to)),
	);
</script>

<span>{distance}</span>

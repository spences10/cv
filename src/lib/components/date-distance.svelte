<script lang="ts">
	import { formatDistanceStrict } from 'date-fns';

	const { from = Date.now(), to = Date.now() } = $props<{
		from: string | number;
		to: string | number;
	}>();

	const distance = formatDistanceStrict(new Date(from), new Date(to));
</script>

<span>{distance}</span>

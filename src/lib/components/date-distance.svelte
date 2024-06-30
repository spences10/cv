<script lang="ts">
	import { formatDistance } from 'date-fns';

	const { from = Date.now(), to = Date.now() } = $props<{
		from: string | number;
		to: string | number;
	}>();

	const distance = formatDistance(new Date(from), new Date(to));
</script>

<span>{distance}</span>

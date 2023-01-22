<script lang="ts">
	import { formatDistance } from 'date-fns'

	export let date = Date.now()
	const distance = formatDistance(
		new Date(Date.now()),
		new Date(date)
	)
</script>

<span>{distance}</span>

<script lang="ts">
	import { formatDistance } from 'date-fns'

	export let from = Date.now()
	export let to = Date.now()

	const distance = formatDistance(
		new Date(from),
		new Date(to)
	)
</script>

<span>{distance}</span>

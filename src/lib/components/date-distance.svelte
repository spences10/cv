<script lang="ts">
	import { formatDistance } from 'date-fns'

	export let date_from = Date.now()
	export let date_to = Date.now()

	const distance = formatDistance(
		new Date(date_from),
		new Date(date_to)
	)
</script>

<span>{distance}</span>

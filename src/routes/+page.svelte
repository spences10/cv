<script lang="ts">
	import { Head } from '$lib/components'
	import { authorName, siteName } from '$lib/config'
	import { Basics, Interests, Work } from '$lib/copy'
</script>

<Head
	title={`Web Development Related Experience · ${siteName}`}
	description={`Relevant web development experience for JavaScript developer ${authorName}`}
/>

<Basics />
<Work />
<Interests />

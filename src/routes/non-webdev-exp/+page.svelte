<script lang="ts">
	import { page } from '$app/stores';
	import { authorName, siteName } from '$lib/config';
	import { NonWebDevExp, References } from '$lib/copy';
	import { Head } from 'svead';

	let title = `Non Web Development Related Experience · ${siteName}`;
	let description = `Relevant past experience for ${authorName}`;
	let url = $page.url.toString();
	let paymentPointer = `$ilp.uphold.com/bzPBWkMBzLmN`;
</script>

<!-- <Head {title} {description} {url} {paymentPointer} /> -->

<NonWebDevExp />
<References />

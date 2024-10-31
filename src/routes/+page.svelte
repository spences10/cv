<script lang="ts">
	import { page } from '$app/stores';
	import { authorName, siteName } from '$lib/config';
	import { Basics, Interests, Work } from '$lib/copy';
	import { Head } from 'svead';

	let title = `Web Development Related Experience · ${siteName}`;
	let description = `Relevant web development experience for JavaScript developer ${authorName}`;
	let url = $page.url.toString();
	let paymentPointer = `$ilp.uphold.com/bzPBWkMBzLmN`;
</script>

<!-- <Head {title} {description} {url} {paymentPointer} /> -->

<Basics />
<Work />
<Interests />

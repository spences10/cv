<script lang="ts">
	import { page } from '$app/stores';
	import { authorName, siteName } from '$lib/config';
	import { Basics, Interests, Work } from '$lib/copy';
	import { Head, type SeoConfig } from 'svead';

	const seo_config: SeoConfig = {
		title: `Web Development Related Experience · ${siteName}`,
		description: `Relevant web development experience for JavaScript developer ${authorName}`,
		url: $page.url.href,
		site_name: siteName,
		author_name: authorName,
		payment_pointer: '$ilp.uphold.com/bzPBWkMBzLmN',
	};
</script>

<Head {seo_config} />

<Basics />
<Work />
<Interests />

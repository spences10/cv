<script lang="ts">
	import { page } from '$app/stores';
	import { authorName, siteName } from '$lib/config';
	import { NonWebDevExp, References } from '$lib/copy';
	import { Head, type SeoConfig } from 'svead';

	const seo_config: SeoConfig = {
		title: `Non Web Development Related Experience · ${siteName}`,
		description: `Relevant past experience for ${authorName}`,
		url: $page.url.href,
		site_name: siteName,
		author_name: authorName,
		payment_pointer: '$ilp.uphold.com/bzPBWkMBzLmN',
	};
</script>

<Head {seo_config} />

<NonWebDevExp />
<References />

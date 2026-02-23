<script lang="ts">
	import { page } from '$app/state';
	import { authorName, siteName } from '$lib/config';
	import { EarlyWebDevExp } from '$lib/copy';
	import { Head, type SeoConfig } from 'svead';

	const seo_config: SeoConfig = {
		title: `Early Web Development Experience · ${siteName}`,
		description: `Earlier web development roles for ${authorName}`,
		url: page.url.href,
		site_name: siteName,
		author_name: authorName,
		payment_pointer: '$ilp.uphold.com/bzPBWkMBzLmN',
	};
</script>

<Head {seo_config} />

<EarlyWebDevExp />

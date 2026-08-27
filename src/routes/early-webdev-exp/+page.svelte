<script lang="ts">
	import { EarlyWebDevExp } from '#lib/copy/index.js';
	import { create_page_schema, create_seo_config } from '#lib/seo.js';
	import { Head, SchemaOrg } from 'svead';

	const title = `Early Web Development Experience | Scott Spence CV`;
	const description = `Scott Spence’s early web development roles, including Svelte consultancy, developer relations, and agency engineering experience.`;
	const path = `/early-webdev-exp`;
	const seo_config = create_seo_config({ title, description, path });
	const schema = create_page_schema({
		title,
		description,
		path,
		page_type: 'WebPage',
	});
</script>

<Head {seo_config} />
<SchemaOrg {schema} />

<EarlyWebDevExp />

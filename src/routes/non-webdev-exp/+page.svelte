<script lang="ts">
	import { NonWebDevExp, References } from '#lib/copy/index.js';
	import { create_page_schema, create_seo_config } from '#lib/seo.js';
	import { Head, SchemaOrg } from 'svead';

	const title = `Analyst Developer Experience | Scott Spence CV`;
	const description = `Scott Spence’s earlier analyst developer career building Microsoft Office automation for major financial organisations.`;
	const path = `/non-webdev-exp`;
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

<NonWebDevExp />
<References />

<script lang="ts">
	import { site_description } from '$lib/config';
	import { Basics, Interests, Projects, Work } from '$lib/copy';
	import { create_page_schema, create_seo_config } from '$lib/seo';
	import { Head, SchemaOrg } from 'svead';

	const title = `Scott Spence CV — Product Engineer & AI Engineering Lead`;
	const seo_config = create_seo_config({
		title,
		description: site_description,
	});
	const schema = create_page_schema({
		title,
		description: site_description,
		page_type: 'ProfilePage',
	});
</script>

<Head {seo_config} />
<SchemaOrg {schema} />

<Basics />
<Work />
<Projects />
<Interests />

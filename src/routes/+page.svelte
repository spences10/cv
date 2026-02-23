<script lang="ts">
	import { page } from '$app/state';
	import { authorName, siteName, siteUrl } from '$lib/config';
	import { Basics, Interests, Projects, Work } from '$lib/copy';
	import {
		Head,
		SchemaOrg,
		type SchemaOrgProps,
		type SeoConfig,
	} from 'svead';

	const seo_config: SeoConfig = {
		title: `Web Development Related Experience · ${siteName}`,
		description: `AI engineering leader and full-stack developer. CV for ${authorName}`,
		url: page.url.href,
		site_name: siteName,
		author_name: authorName,
		payment_pointer: '$ilp.uphold.com/bzPBWkMBzLmN',
	};

	const schema: SchemaOrgProps['schema'] = {
		'@type': 'Person',
		name: 'Scott Spence',
		url: siteUrl,
		sameAs: [
			'https://scottspence.com',
			'https://github.com/spences10',
		],
		description:
			'AI engineering leader and full-stack developer specialising in TypeScript, SvelteKit, and AI integration.',
		email: 'cv@scottspence.com',
		worksFor: {
			'@type': 'Organization',
			name: 'OES Technology',
		},
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'freeCodeCamp',
		},
		knowsAbout: [
			'TypeScript',
			'SvelteKit',
			'AI Engineering',
			'Claude API',
			'MCP',
			'JavaScript',
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Swanley',
			addressRegion: 'Kent',
			addressCountry: 'UK',
		},
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Engineering Lead & AI Product Engineer',
			occupationLocation: {
				'@type': 'City',
				name: 'London',
			},
			skills: 'TypeScript, SvelteKit, AI Integration, Claude API, MCP',
		},
	};
</script>

<Head {seo_config} />
<SchemaOrg {schema} />

<Basics />
<Work />
<Projects />
<Interests />

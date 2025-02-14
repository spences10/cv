<script lang="ts">
	import { page } from '$app/state';
	import { authorName, siteName, siteUrl } from '$lib/config';
	import { Basics, Interests, Work } from '$lib/copy';
	import {
		Head,
		SchemaOrg,
		type SchemaOrgProps,
		type SeoConfig,
	} from 'svead';

	const seo_config: SeoConfig = {
		title: `Web Development Related Experience · ${siteName}`,
		description: `Relevant web development experience for JavaScript developer ${authorName}`,
		url: page.url.href,
		site_name: siteName,
		author_name: authorName,
		payment_pointer: '$ilp.uphold.com/bzPBWkMBzLmN',
	};

	const schema: SchemaOrgProps['schema'] = {
		type: 'Person',
		name: 'Scott Spence',
		url: siteUrl,
		sameAs: [
			'https://scottspence.com',
			'https://github.com/spences10',
		],
		description:
			'Seasoned developer with expertise in JavaScript, HTML, and CSS, specializing in Svelte and React frameworks.',
		email: 'cv@scottspence.com',
		worksFor: [
			{
				type: 'Organization',
				name: 'OES Technology',
			},
			{
				type: 'Organization',
				name: 'XtendOps',
			},
		],
		alumniOf: {
			type: 'EducationalOrganization',
			name: 'freeCodeCamp',
		},
		knowsAbout: [
			'SvelteKit',
			'Svelte',
			'React',
			'JavaScript',
			'TypeScript',
			'HTML',
			'CSS',
		],
		address: {
			type: 'PostalAddress',
			addressLocality: 'Swanley',
			addressRegion: 'Kent',
			addressCountry: 'UK',
		},
		hasOccupation: {
			type: 'Occupation',
			name: 'Senior Developer & Community Leader',
			occupationLocation: {
				type: 'City',
				name: 'London',
			},
			skills: 'JavaScript, Svelte, React, TypeScript, HTML, CSS',
		},
	};
</script>

<Head {seo_config} />
<SchemaOrg {schema} />

<Basics />
<Work />
<Interests />

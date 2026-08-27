import {
	author_name,
	canonical_site_url,
	language,
	profile_image,
	site_description,
	site_name,
	site_url,
	social_image,
} from '#lib/config.js';
import type { SchemaOrgProps, SeoConfig } from 'svead';

export const same_as = [
	'https://scottspence.com',
	'https://github.com/spences10',
	'https://www.linkedin.com/in/spences10',
	'https://bsky.app/profile/scottspence.dev',
];

export const person_id = `${canonical_site_url}#person`;
export const website_id = `${canonical_site_url}#website`;

export const canonical_url = (path = `/`) =>
	new URL(path, canonical_site_url).href;

interface SeoOptions {
	title: string;
	description: string;
	path?: string;
}

export const create_seo_config = ({
	title,
	description,
	path = `/`,
}: SeoOptions): SeoConfig => ({
	title,
	description,
	url: canonical_url(path),
	website: site_url,
	language,
	open_graph_image: social_image,
	open_graph_image_alt: `Illustrated portrait of ${author_name}`,
	payment_pointer: '$ilp.uphold.com/bzPBWkMBzLmN',
	author_name,
	site_name,
	twitter_handle: '@spences10',
});

export const person_schema = {
	'@type': 'Person' as const,
	'@id': person_id,
	name: author_name,
	url: canonical_site_url,
	image: profile_image,
	sameAs: same_as,
	description: site_description,
	email: 'cv@scottspence.com',
	jobTitle: 'Product Engineer',
	worksFor: {
		'@type': 'Organization',
		name: 'Cloud Lobsters',
	},
	alumniOf: {
		'@type': 'EducationalOrganization',
		name: 'freeCodeCamp',
	},
	knowsAbout: [
		'Production AI systems',
		'Coding-agent infrastructure',
		'Model Context Protocol',
		'SvelteKit',
		'TypeScript',
		'Engineering leadership',
	],
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Swanley',
		addressRegion: 'Kent',
		addressCountry: 'GB',
	},
};

export const website_schema = {
	'@type': 'WebSite' as const,
	'@id': website_id,
	url: canonical_site_url,
	name: site_name,
	description: site_description,
	publisher: { '@id': person_id },
};

type PageType = 'ProfilePage' | 'WebPage';

interface PageSchemaOptions {
	title: string;
	description: string;
	path?: string;
	page_type: PageType;
}

export const create_page_schema = ({
	title,
	description,
	path = `/`,
	page_type,
}: PageSchemaOptions): SchemaOrgProps['schema'] => {
	const url = canonical_url(path);
	const page_schema = {
		'@type': page_type,
		'@id': `${url}#${page_type === 'ProfilePage' ? 'profile' : 'webpage'}`,
		url,
		name: title,
		description,
		isPartOf: { '@id': website_id },
		...(page_type === 'ProfilePage'
			? { mainEntity: { '@id': person_id } }
			: { about: { '@id': person_id } }),
	};

	return {
		'@context': 'https://schema.org',
		'@graph': [website_schema, person_schema, page_schema],
	} as unknown as SchemaOrgProps['schema'];
};

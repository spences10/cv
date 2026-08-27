import { expect, test } from '@playwright/test';

const site_description = `Scott Spence is a UK-based product engineer building production AI systems, coding-agent infrastructure, MCP tools, and SvelteKit products.`;
const opening_summary = `UK-based product engineer building production AI systems, coding-agent infrastructure, MCP tools, and SvelteKit products.`;

const route_cases = [
	{
		path: `/`,
		title: `Scott Spence CV — Product Engineer & AI Engineering Lead`,
		description: site_description,
		canonical: `https://mecv.xyz/`,
		page_type: `ProfilePage`,
	},
	{
		path: `/early-webdev-exp`,
		title: `Early Web Development Experience | Scott Spence CV`,
		description: `Scott Spence’s early web development roles, including Svelte consultancy, developer relations, and agency engineering experience.`,
		canonical: `https://mecv.xyz/early-webdev-exp`,
		page_type: `WebPage`,
	},
	{
		path: `/non-webdev-exp`,
		title: `Analyst Developer Experience | Scott Spence CV`,
		description: `Scott Spence’s earlier analyst developer career building Microsoft Office automation for major financial organisations.`,
		canonical: `https://mecv.xyz/non-webdev-exp`,
		page_type: `WebPage`,
	},
];

for (const route_case of route_cases) {
	test(`${route_case.path} has canonical metadata and linked structured data`, async ({
		page,
	}) => {
		await page.goto(route_case.path);

		await expect(page).toHaveTitle(route_case.title);
		await expect(page.locator('html')).toHaveAttribute(
			'lang',
			'en-GB',
		);
		await expect(
			page.locator('link[rel="canonical"]'),
		).toHaveAttribute('href', route_case.canonical);
		await expect(
			page.locator('meta[name="description"]'),
		).toHaveAttribute('content', route_case.description);
		await expect(
			page.locator('meta[property="og:title"]'),
		).toHaveAttribute('content', route_case.title);
		await expect(
			page.locator('meta[property="og:image"]'),
		).toHaveAttribute(
			'content',
			'https://mecv.xyz/og-cover-image-scott-spence.jpg',
		);
		await expect(
			page.locator('meta[property="og:image:alt"]'),
		).toHaveAttribute(
			'content',
			'Illustrated portrait of Scott Spence',
		);
		await expect(
			page.locator('meta[name="twitter:creator"]'),
		).toHaveAttribute('content', '@spences10');

		const json_ld = page.locator(
			'script[type="application/ld+json"]',
		);
		await expect(json_ld).toHaveCount(1);
		const schema = JSON.parse(
			(await json_ld.textContent()) ?? `{}`,
		) as {
			'@context': string;
			'@graph': Array<Record<string, unknown>>;
		};
		expect(schema['@context']).toBe('https://schema.org');

		const person = schema['@graph'].find(
			(node) => node['@type'] === 'Person',
		);
		const website = schema['@graph'].find(
			(node) => node['@type'] === 'WebSite',
		);
		const schema_page = schema['@graph'].find(
			(node) => node['@type'] === route_case.page_type,
		);

		expect(person).toMatchObject({
			'@id': 'https://mecv.xyz/#person',
			name: 'Scott Spence',
			url: 'https://mecv.xyz/',
			jobTitle: 'Product Engineer',
			sameAs: [
				'https://scottspence.com',
				'https://github.com/spences10',
				'https://www.linkedin.com/in/spences10',
				'https://bsky.app/profile/scottspence.dev',
			],
		});
		expect(website).toMatchObject({
			'@id': 'https://mecv.xyz/#website',
			publisher: { '@id': 'https://mecv.xyz/#person' },
		});
		expect(schema_page).toMatchObject({
			url: route_case.canonical,
			isPartOf: { '@id': 'https://mecv.xyz/#website' },
			...(route_case.page_type === 'ProfilePage'
				? { mainEntity: { '@id': 'https://mecv.xyz/#person' } }
				: { about: { '@id': 'https://mecv.xyz/#person' } }),
		});
	});
}

test('index page has the direct identity summary', async ({
	page,
}) => {
	await page.goto('/');

	await expect(page.locator('h1')).toHaveText('Scott Spence');
	await expect(
		page.getByText(opening_summary, { exact: true }),
	).toBeVisible();
});

test('sitemap contains only canonical indexable pages', async ({
	request,
}) => {
	const response = await request.get('/sitemap.xml');
	const body = await response.text();

	expect(response.ok()).toBe(true);
	expect(response.headers()['content-type']).toContain(
		'application/xml',
	);
	expect(body.match(/<loc>/g)).toHaveLength(3);
	for (const route_case of route_cases) {
		expect(body).toContain(`<loc>${route_case.canonical}</loc>`);
	}
	expect(body).not.toContain('<lastmod>');
	expect(body).not.toContain('/api/');
});

test('robots allows crawling and advertises the sitemap', async ({
	request,
}) => {
	const response = await request.get('/robots.txt');
	const body = await response.text();

	expect(response.ok()).toBe(true);
	expect(body).toContain('User-agent: *');
	expect(body).toContain('Allow: /');
	expect(body).toContain('Sitemap: https://mecv.xyz/sitemap.xml');
	expect(body).not.toContain('GPTBot');
});

test('error pages are not indexable', async ({ page }) => {
	const response = await page.goto('/not-a-real-page');

	expect(response?.status()).toBe(404);
	await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
		'content',
		'noindex, follow',
	);
});

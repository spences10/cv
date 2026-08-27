import { canonical_url } from '$lib/seo';

const sitemap_paths = [`/`, `/early-webdev-exp`, `/non-webdev-exp`];

export const GET = () => {
	const urls = sitemap_paths
		.map((path) => `\t<url><loc>${canonical_url(path)}</loc></url>`)
		.join(`\n`);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};

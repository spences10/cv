import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			smartypants: true,
			remarkPlugins: [
				[
					rehypeExternalLinks,
					{ target: '_blank', rel: 'noopener noreferrer' },
				],
			],
		}),
	],

	kit: {
		adapter: adapter(),
	},

	extensions: ['.svelte', '.md'],
};

export default config;

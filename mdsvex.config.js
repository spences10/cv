import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [],
	rehypePlugins: [
		[
			rehypeExternalLinks,
			{ target: '_blank', rel: 'noopener noreferrer' },
		],
	],
});

export default config;

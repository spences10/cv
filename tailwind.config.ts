import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	plugins: [typography, daisyui],

	daisyui: {
		// included themes
		themes: [
			'dracula',
			'aqua',
			'black',
			'bumblebee',
			'corporate',
			'cupcake',
			'cyberpunk',
			'dark',
			'forest',
			'halloween',
			'light',
			'night',
			'synthwave',
			'wireframe'
		]
	}
} satisfies Config;

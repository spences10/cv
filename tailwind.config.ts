const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
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
			'wireframe',
		],
	},
};

module.exports = config;

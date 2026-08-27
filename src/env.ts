import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_FATHOM_ID: {
		public: true,
		static: true,
		schema: (input) => input ?? '',
	},
	PUBLIC_FATHOM_URL: {
		public: true,
		static: true,
		schema: (input) => input ?? '',
	},
});

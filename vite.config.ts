import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

const config = defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			compilerOptions: { experimental: { async: true } },
			experimental: { remoteFunctions: true },
			extensions: ['.svelte', '.md'],
			preprocess: [
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
				vitePreprocess(),
			],
		}),
	],
	test: {
		projects: [
			{
				// Client-side tests (Svelte components)
				extends: './vite.config.ts',
				test: {
					name: 'client',
					// Timeout for browser tests - prevent hanging on element lookups
					testTimeout: 2000,
					browser: {
						enabled: true,
						provider: playwright(),
						// Multiple browser instances for better performance
						// Uses single Vite server with shared caching
						instances: [{ browser: 'chromium' }],
					},
					// { browser: 'firefox' },
					// { browser: 'webkit' },
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: [
						'src/lib/server/**',
						'src/**/*.ssr.{test,spec}.{js,ts}',
					],
					setupFiles: ['./src/vitest-setup-client.ts'],
				},
			},
			{
				// SSR tests (Server-side rendering)
				extends: './vite.config.ts',
				test: {
					name: 'ssr',
					environment: 'node',
					include: ['src/**/*.ssr.{test,spec}.{js,ts}'],
				},
			},
			{
				// Server-side tests (Node.js utilities)
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: [
						'src/**/*.svelte.{test,spec}.{js,ts}',
						'src/**/*.ssr.{test,spec}.{js,ts}',
					],
				},
			},
		],
		// Improved performance: Vitest only checks files in src/
		// instead of scanning the entire project
		coverage: { include: ['src'] },
	},
});

export default {
	...config,
	fmt: {
		useTabs: true,
		singleQuote: true,
		printWidth: 70,
		trailingComma: 'all',
		proseWrap: 'always',
		svelte: true,
		sortTailwindcss: {
			stylesheet: './src/app.css',
		},
		ignorePatterns: [
			'.svelte-kit/**',
			'build/**',
			'coverage/**',
			'playwright-report/**',
			'test-results/**',
			'package-lock.json',
			'pnpm-lock.yaml',
			'yarn.lock',
			'.claude/settings.local.json',
		],
	},
	lint: {
		ignorePatterns: [
			'.svelte-kit/**',
			'build/**',
			'coverage/**',
			'playwright-report/**',
			'test-results/**',
		],
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
};

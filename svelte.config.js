import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    alias: {
      '@components': resolve('./src/lib/components'),
      '@icons': resolve('./src/lib/icons'),
      '@lib': resolve('./src/lib'),
    },
  },

  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true,
    }),
  ],
}

export default config

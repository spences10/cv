import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import path from 'path'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '@components': path.resolve('./src/lib/components'),
          '@icons': path.resolve('./src/lib/icons'),
          '@lib': path.resolve('./src/lib'),
        },
      },
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

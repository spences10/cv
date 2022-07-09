import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@components': resolve('./src/lib/components'),
      '@icons': resolve('./src/lib/icons'),
      '@lib': resolve('./src/lib'),
    },
  },
}

export default config

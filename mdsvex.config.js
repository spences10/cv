import remarkExternalLinks from 'remark-external-links'

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [
    [
      remarkExternalLinks,
      { target: '_blank', rel: 'noopener noreferrer' },
    ],
  ],
  rehypePlugins: [],
}

export default config

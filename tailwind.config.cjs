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

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

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
}

module.exports = config

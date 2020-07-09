import { future } from '@theme-ui/presets'

export default {
  ...future,
  colors: {
    text: '#282a36',
    background: '#ffffff',
    primary: '#ff79c6',
    secondary: '#8be9fd',
    muted: '#8394ca',
    highlight: '#50fa7b',
    gray: '#808080',
    accent: '#F1F8FF',
    darken: '#323442',
  },
  buttons: {
    backgroundColor: 'primary',
  },

  sizes: {
    container: 640,
  },
  layout: {
    container: {
      p: [2, 4],
    },
  },
  forms: {
    slider: {
      color: 'primary',
      backgroundColor: 'darken',
    },
  },

  styles: {
    root: {
      fontSize: 1,
      fontFamily: 'body',
      lineHeight: 'body',
    },
    h1: { color: 'primary' },
    a: {
      color: 'primary',
    },
  },
}

import { defaults } from './default-config'

export const theme = {
  ...defaults,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  // fontFamily: {
  //   mono: [['Inconsolata'], defaults.fontFamily.mono].join(`,`),
  //   sans: [['Manrope'], defaults.fontFamily.sans].join(`,`),
  //   serif: [['Hepta Slab'], defaults.fontFamily.serif].join(`,`),
  // },
  boxShadow: {
    outline: '0 0 0 3px hsla(270, 50%, 40%, 0.5)',
  },
  ...defaults.boxShadow,
  colors: {
    primary: {
      100: '#aa7fd4',
      200: '#9966cc',
      300: '#884cc3',
      400: '#773bb2',
      500: '#663399',
      600: '#552b80',
      700: '#442266',
      800: '#331a4d',
      900: '#221133',
    },
    ...defaults.colors,
  },
}

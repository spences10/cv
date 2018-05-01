import { injectGlobal, css } from 'styled-components'

export const theme = {
  black: '#7d95b6',
  white: '#ffffff',
  dark: '#4e5c6e',
  light: '#755f9f',
  green: '#8ac3a9',
  yellow: '#fcdeb6',
  red: '#ff8463',
  pink: '#ff0198', // hollywood cerise
  mySinYellow: '#ffb617', // my sin
  purple: '#6e27c5', // purple heart
  orange: '#ff6600', // blaze orange
  blue: '#01c1d6', // robin's egg blue
  java: '#1cbcd2', // java
  sun: '#fab319', // sun
  affair: '#69479e', // affair
  flamingo: '#f16623', // flamingo
  minsk: '#2e2e86', // minsk
  pomegranate: '#ee362c', // pomegranate
  redViolet: '#eb238e', // red violet
  sushi: '#7cc142', // sushi
  bombay: '#adadaf', // Bombay
  jsYellow: '#f7e018' // JS yellow
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Bungee+Inline');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    word-wrap: break-word;
    background-color: #fafafa;
  }

  h1, h2, h3 {
    font-family: 'Open Sans';
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;  
  }

  /* remove dotted line around links in Firefox */
  a:active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none
  }

  :focus {
    outline:none;
  }

  ::-moz-focus-inner {
    border:0;
  }
`

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

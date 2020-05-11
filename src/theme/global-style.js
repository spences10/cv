import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { defaults } from './default-config'

export const theme = {
  ...defaults,
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  body {
    line-height:1.625;
    letter-spacing: 0.025em;
    background: #fafafa;
    color: #222;
    -webkit-font-smoothing: antialiased;
  }
`

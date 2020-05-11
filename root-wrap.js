import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/layout'
import { A, P } from './src/components/page-elements'
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  a: props => <A {...props} />,
  h1: props => <h1 {...props} />,
  h2: props => <h1 {...props} />,
  h3: props => <h1 {...props} />,
  h4: props => <h1 {...props} />,
  h5: props => <h1 {...props} />,
  h6: props => <h1 {...props} />,
  p: props => <P {...props} />,
}

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </ThemeProvider>
)

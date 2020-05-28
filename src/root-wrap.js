import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Basics } from './components/basics'
import { DateDistance } from './components/date-distance'
import { Layout } from './components/layout'
import {
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
} from './components/page-elements'
import { WorkHeader } from './components/work'
import { GlobalStyle, theme } from './theme/global-style'

const components = {
  a: props => <A {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  p: props => <P {...props} />,
  Basics,
  DateDistance,
  WorkHeader,
}

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </ThemeProvider>
)

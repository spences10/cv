import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Layout } from './src/components/layout'
import { GlobalStyle } from './src/theme/global-style'

const components = {
  h2: (props) => <h1 css={{ color: 'red' }} {...props} />,
}

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </>
)

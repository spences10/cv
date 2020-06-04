import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
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
import { globals, theme } from './theme/global-style'
import { ThemeProvider } from './theme/theme-provider'

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
  <>
    <Helmet>
      <script
        src={`${process.env.GATSBY_FATHOM_TRACKING_URL_CV}/script.js`}
        spa="auto"
        site={process.env.GATSBY_FATHOM_TRACKING_ID_CV}
        defer
      ></script>
    </Helmet>
    <ThemeProvider theme={theme} className={globals}>
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ThemeProvider>
  </>
)

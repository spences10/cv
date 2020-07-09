import { MDXProvider } from 'gatsby-plugin-mdx'
import React from 'react'
import { Helmet } from 'react-helmet'
import * as themeUiComponents from 'theme-ui'
import {
  Basics,
  DateDistance,
  Education,
  Interests,
  References,
  Skills,
  Slider,
  Specifics,
  WorkHeader,
} from './components'
import { Layout } from './components/layout'

const components = {
  Basics,
  DateDistance,
  Education,
  Interests,
  References,
  Skills,
  Slider,
  Specifics,
  WorkHeader,
  ...themeUiComponents,
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
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </>
)

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet'
import * as themeUiComponents from 'theme-ui'

import {
  Basics,
  DateDistance,
  Education,
  Interests,
  References,
  Skills,
  MrSlider,
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
  MrSlider,
  Specifics,
  WorkHeader,
  ...themeUiComponents,
}

export const RootWrap = ({ children }) => (
  <>
    <Helmet>
      <script
        // This causes the error in console "Uncaught SyntaxError: Unexpected token '<'"
        src={`${process.env.GATSBY_FATHOM_TRACKING_URL_CV}/script.js`}
        spa="auto"
        site={process.env.GATSBY_FATHOM_TRACKING_ID_CV}
        defer
      />
    </Helmet>
    <MDXProvider components={components}>
      <Layout>{children}</Layout>
    </MDXProvider>
  </>
)

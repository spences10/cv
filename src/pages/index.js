import React from 'react'
// import { graphql } from 'gatsby'
// import styled, { ThemeProvider } from 'styled-components'

// import {
//   CvThemeContext,
//   CvThemeProvider
// } from '../contexts/CvThemeContext'

// import { Dump } from '../util/helpers'
import About from '../components/about'
import Work from '../components/work'
import Skills from '../components/skills'
import Education from '../components/education'
// import ThemeSelect from '../components/ThemeSelect'
import Layout from '../components/layout'

// const ThemeSelectWrapper = styled.div`
//   position: fixed;
//   bottom: 0;
//   right: 0;
// `

const IndexPage = () => (
  <Layout>
    {/* <Dump props={work} /> */}
    <About />
    <Skills />
    <Work />
    <Education />
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query CvQuery {
//     cvDataCv {
//       publications {
//         name
//         publisher
//         releaseDate
//         website
//         summary
//       }
//       languages {
//         language
//         fluency
//       }
//       references {
//         name
//         reference
//       }
//     }
//   }
// `

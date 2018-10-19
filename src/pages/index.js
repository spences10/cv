import React from 'react'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'
import Layout from '../components/layout'
import About from '../components/about'
import Work from '../components/work'
import Skills from '../components/skills'
import Education from '../components/education'
import ThemeSelect from '../components/themeSelect'

const ThemeSelectWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  position: fixed;
  bottom: 0;
  right: 0;
`

const IndexPage = () => (
  <Layout>
    {/* <Dump props={work} /> */}
    <About />
    <Skills />
    <Work />
    <Education />
    <ThemeSelectWrapper>
      <ThemeSelect />
    </ThemeSelectWrapper>
  </Layout>
)

export default IndexPage

// TODO: components for publications, languages and references
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

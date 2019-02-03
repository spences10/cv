import React from 'react'
import styled from 'styled-components'
import About from '../components/about'
import Awards from '../components/awards'
import Education from '../components/education'
import Interests from '../components/interests'
import Languages from '../components/languages'
// import { Dump } from '../util/helpers'
import Layout from '../components/layout'
import Publications from '../components/publications'
import References from '../components/references'
import Skills from '../components/skills'
import ThemeSelect from '../components/themeSelect'
import Volunteer from '../components/volunteer'
import Work from '../components/work'

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
    <Volunteer />
    <Education />
    <Awards />
    <Publications />
    <Languages />
    <Interests />
    <References />
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

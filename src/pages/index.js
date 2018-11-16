import React from 'react'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'
import Layout from '../components/layout'
import About from '../components/about'
import Work from '../components/work'
import Volunteer from '../components/volunteer'
import Skills from '../components/skills'
import Education from '../components/education'
import ThemeSelect from '../components/themeSelect'
import Awards from '../components/awards'
import Publications from '../components/publications'
import Languages from '../components/languages'
import Interests from '../components/interests'
import References from '../components/references'
import { Spring } from 'react-spring'

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
    <Spring delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {({ height, opacity }) => (
        <div style={{ height, opacity }}>
          <Publications />
        </div>
      )}
    </Spring>
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

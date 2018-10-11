import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import styled, { ThemeProvider } from 'styled-components'

// import {
//   CvThemeContext,
//   CvThemeProvider
// } from '../contexts/CvThemeContext'

// import { Dump } from '../util/helpers'
import { GlobalStyle } from '../theme/globalStyle'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Education from '../components/Education'
// import ThemeSelect from '../components/ThemeSelect'
import Layout from '../components/layout'

// const ThemeSelectWrapper = styled.div`
//   position: fixed;
//   bottom: 0;
//   right: 0;
// `

const IndexPage = ({ data }) => {
  const { basics, work, skills, education } = data.cvDataCv
  return (
    <Layout>
      <GlobalStyle />
      {/* <Dump props={work} /> */}
      <About aboutData={basics} />
      <Skills skillsData={skills} />
      <Work workData={work} />
      <Education educationData={education} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  basics: PropTypes.object,
  work: PropTypes.object,
  skills: PropTypes.object,
  education: PropTypes.object
}

export default IndexPage

export const query = graphql`
  query CvQuery {
    cvDataCv {
      basics {
        name
        label
        picture
        email
        phone
        website
        summary
        location {
          address
          postalCode
          city
          countryCode
          region
        }
        profiles {
          network
          username
          url
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
      }
      publications {
        name
        publisher
        releaseDate
        website
        summary
      }
      skills {
        name
        level
        keywords
      }
      languages {
        language
        fluency
      }
      references {
        name
        reference
      }
    }
  }
`

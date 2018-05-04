import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Education from '../components/Education'
import ThemeSelect from '../components/ThemeSelect'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . a a a a . . '
    '. . w w w w . . '
    '. . s s s s . . '
    '. . e e e e . . ';
  background: ${props => props.theme.background};
`

const IndexPage = props => {
  const {
    basics,
    work,
    skills,
    education
  } = props.data.allCv.edges[0].node
  return (
    <PageContainer>
      {/* <Dump
        props={basics}
        props={props.data.allCv.edges[0].node}
        pageResources={props.pageResources}
      /> */}
      <About aboutData={basics} />
      <Work workData={work} />
      <Skills skillsData={skills} />
      <Education educationData={education} />
    </PageContainer>
  )
}

export default IndexPage

export const query = graphql`
  query CvQuery {
    allCv {
      edges {
        node {
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
            courses
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
    }
  }
`

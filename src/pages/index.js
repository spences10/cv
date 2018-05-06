import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

// import { Dump } from '../util/helpers'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Education from '../components/Education'
import ThemeSelect from '../components/ThemeSelect'

import { theme1, theme2, media } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . t . . . . . '
    '. . a a a a . . '
    '. . w w w w . . '
    '. . s s s s . . '
    '. . e e e e . . ';
  background: ${props => props.theme.background};
  ${media.giant`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . t . . . . . '
      '. . a a a a . . '
      '. . w w w w . . '
      '. . s s s s . . '
      '. . e e e e . . ';
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      goldenrod, 
      ${props => props.theme.secondary});
  `};
  ${media.desktop`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . t . . . . . '
      '. . a a a a . . '
      '. . w w w w . . '
      '. . s s s s . . '
      '. . e e e e . . ';;
    /* background: dodgerblue; */
    background: linear-gradient(
      0.25turn, 
      dodgerblue, 
      ${props => props.theme.secondary});
  `};
  ${media.tablet`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      't . . . . .'
      'a a a a a a'
      'w w w w w w'
      's s s s s s'
      'e e e e e e';
    /* background: mediumseagreen; */
    background: linear-gradient(
      0.25turn, 
      mediumseagreen, 
      ${props => props.theme.secondary});
  `};
  ${media.phone`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      't . . .'
      'a a a a'
      'w w w w'
      's s s s'
      'e e e e';
    /* background: palevioletred; */
    background: linear-gradient(
      0.25turn, 
      palevioletred, 
      ${props => props.theme.secondary});
  `};
`

class IndexPage extends React.Component {
  // const IndexPage = props => {

  state = {
    apiUrl: 'https://cvjson.now.sh/',
    theme: theme1
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }

  render() {
    const {
      basics,
      work,
      skills,
      education
    } = this.props.data.allCv.edges[0].node
    return (
      <ThemeProvider theme={this.state.theme}>
        <PageContainer>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
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
      </ThemeProvider>
    )
  }
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

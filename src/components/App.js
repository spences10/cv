import React from 'react'
import styled from 'styled-components'

import About from './About'
import Work from './Work'
import Skills from './Skills'
import Education from './Education'

import cv from '../cv.json'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . a a . . '
    '. . w w . . '
    '. . s s . . '
    '. . e e . . ';
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cv: cv
    }
  }

  render() {
    const { basics, education, skills, work } = this.state.cv

    return (
      <PageContainer>
        <About aboutData={basics.summary} />
        <Work workData={work} />
        <Skills skillsData={skills} />
        <Education educationData={education} />
      </PageContainer>
    )
  }
}

export default App

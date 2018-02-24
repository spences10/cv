import React from 'react'

import About from './About'
import Work from './Work'
import Skills from './Skills'
import Education from './Education'
import cv from '../cv.json'

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
      <div>
        <About aboutData={basics.summary} />
        <Work workData={work} />
        <Skills skillsData={skills} />
        <Education educationData={education} />
      </div>
    )
  }
}

export default App

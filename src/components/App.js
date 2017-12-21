import React from 'react'

import About from './About'
import Work from './Work'

const App = props => {
  const profileData = props.cvObj.basics
  const aboutData = profileData.summary
  const workData = props.cvObj.work
  const skillsData = props.cvObj.skills
  const educationData = props.cvObj.education
  return (
    <div>
      <About aboutData={aboutData} />
      <Work workData={workData} />
    </div>
  )
}

export default App

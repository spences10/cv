import React from 'react'

import About from './About'

const App = props => {
  const profileData = props.cvObj.basics
  const aboutData = profileData.summary
  const workData = props.cvObj.work
  const skillsData = props.cvObj.skills
  const educationData = props.cvObj.education
  return (
    <div>
      <About aboutData={aboutData} />
    </div>
  )
}

export default App

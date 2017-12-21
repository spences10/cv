import React from 'react'

import About from './About'

const App = props => {
  const profileData = props.cvObj.basics
  const aboutData = profileData.summary
  return (
    <div>
      <About aboutData={aboutData} />
    </div>
  )
}

export default App

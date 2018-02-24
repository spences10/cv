import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  grid-area: a;
`

const About = props => {
  return (
    <AboutWrapper>
      <div>{props.aboutData}</div>
    </AboutWrapper>
  )
}

export default About

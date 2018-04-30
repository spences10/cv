import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'

const AboutWrapper = styled.div`
  grid-area: a;
`

const StyledName = styled.h1``

const StyledLabel = styled.h2``

const StyledImg = styled.img`
  background-image: url(${props => props.src};);
`

const StyledEmail = styled.p``

const StyledPhone = styled.p``

const StyledWebsite = styled.p``

const StyledSummary = styled.div``

const About = props => {
  const {
    name,
    label,
    picture,
    email,
    phone,
    website,
    summary
  } = props.aboutData

  return (
    <AboutWrapper>
      <StyledName>{name}</StyledName>
      <StyledLabel>{label}</StyledLabel>
      <StyledImg src={picture} />
      <StyledEmail>{email}</StyledEmail>
      <StyledPhone>{phone}</StyledPhone>
      <StyledWebsite>{website}</StyledWebsite>
      <StyledSummary>{summary}</StyledSummary>
      {/* <Dump props={props} /> */}
    </AboutWrapper>
  )
}

export default About

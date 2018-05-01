import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'

const AboutWrapper = styled.div`
  grid-area: a;
`

const NameLabelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'n n p '
    'l l p ';
`

const StyledName = styled.p`
  grid-area: n;
  font-size: 3rem;
  margin: 1rem 1rem 1rem 1rem;
  border: 1rem;
  padding: 1rem;
`

const StyledLabel = styled.p`
  grid-area:l
  font-size: 1.8rem;
  margin: 1rem;
  border: 1rem;
  padding: 1rem;
`

const StyledImg = styled.img`
  grid-area: p;
  object-fit: 
  border-radius: 30%;
  background-image: url(${props => props.src};);
  height: 6rem;
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
      <NameLabelWrapper>
        <StyledName>{name}</StyledName>
        <StyledLabel>{label}</StyledLabel>
        <StyledImg src={picture} />
      </NameLabelWrapper>
      <StyledEmail>{email}</StyledEmail>
      <StyledPhone>{phone}</StyledPhone>
      <StyledWebsite>{website}</StyledWebsite>
      <StyledSummary>{summary}</StyledSummary>
      {/* <Dump props={props} /> */}
    </AboutWrapper>
  )
}

export default About

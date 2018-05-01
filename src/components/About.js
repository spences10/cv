import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'

const AboutWrapper = styled.div`
  grid-area: a;
`

const AboutNameLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'n n n p p'
    'l l l p p';
`

const AboutName = styled.p`
  grid-area: n;
  font-size: 3rem;
  margin: 1rem 0rem 0.1rem 0rem;
  padding: 1rem 0rem 0.1rem 0rem;
`

const AboutLabel = styled.p`
  grid-area: l;
  font-size: 1.8rem;
  margin: 0.1rem 0rem 1rem 0rem;
  padding: 0.1rem 0rem 1rem 0rem;
`

const AboutImg = styled.img`
  grid-area: p;
  object-fit: cover;
  margin: 1rem;
  padding: 1rem;
  width: 60%;
  border-radius: 50%;
  background-image: url(${props => props.src};);
`

const AboutEmail = styled.p``

const AboutPhone = styled.p``

const AboutWebsite = styled.p``

const AboutSummary = styled.div``

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
      <AboutNameLabel>
        <AboutName>{name}</AboutName>
        <AboutLabel>{label}</AboutLabel>
        <AboutImg src={picture} />
      </AboutNameLabel>
      <AboutEmail>{email}</AboutEmail>
      <AboutPhone>{phone}</AboutPhone>
      <AboutWebsite>{website}</AboutWebsite>
      <AboutSummary>{summary}</AboutSummary>
      {/* <Dump props={props} /> */}
    </AboutWrapper>
  )
}

export default About

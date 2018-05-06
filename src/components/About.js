import React from 'react'
import styled from 'styled-components'
import { media } from '../theme/globalStyle'

import {
  UpperCaseHeading as H,
  ItemWrapper as IW,
  StyledHyperLink as SHL,
  StyledDiv as SD,
  StyledP as SP
} from './shared/SharedComponents'

import defaultAvi from '../img/default_avatar.png'

const AboutWrapper = IW.extend`
  grid-area: a;
`

const AboutNameLabel = SD.extend`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'n n n p p'
    'l l l p p';
  ${media.giant`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'n n n p p'
      'l l l p p';
  `};
  ${media.desktop`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'n n n p p'
      'l l l p p';
  `};
  ${media.tablet`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'n n n p p'
      'l l l p p';
  `};
  ${media.phone`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'n n p'
      'l l p';
  `};
`

const AboutName = H.extend`
  grid-area: n;
  font-size: 3rem;
  font-family: ${props => props.theme.fontHeader};
  margin: 0.1rem 0rem 0.1rem 0rem;
  padding: 0.1rem 0rem 0.1rem 0rem;
`
// top right bottom left
const AboutLabel = styled.p`
  grid-area: l;
  /* font-size: 1.8rem; */
  margin-top: 0.1rem;
  padding-top: 0.1rem;
`

const AboutImg = styled.img`
  grid-area: p;
  object-fit: cover;
  margin: 1rem;
  padding: 0rem;
  width: 80%;
  border-radius: 50%;
  background-image: url(${props => props.src};);
`

const EmailPhoneSiteWrapper = SD.extend`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'e s'
    'p .';
  ${media.giant`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'e s'
      'p .';
  `};
  ${media.desktop`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'e'
      's'
      'p';
  `};
  ${media.tablet`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'e' 
      's'
      'p';
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'e'
      's'
      'p';
  `};
`

const AboutEmail = SHL.extend`
  grid-area: e;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutPhone = SHL.extend`
  grid-area: p;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutWebsite = SHL.extend`
  grid-area: s;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutSummary = SD.extend``

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
        <AboutImg src={picture || defaultAvi} />
      </AboutNameLabel>
      <EmailPhoneSiteWrapper>
        <AboutEmail
          href={`mailto:${email}?subject=Hi ${name} 👋`}
          target="_blank"
          rel="noopener">
          {email}
        </AboutEmail>
        <AboutPhone href={phone} target="_blank" rel="noopener">
          {phone}
        </AboutPhone>
        <AboutWebsite href={website} target="_blank" rel="noopener">
          {website}
        </AboutWebsite>
      </EmailPhoneSiteWrapper>
      <AboutSummary>{summary}</AboutSummary>
      {/* <Dump props={props} /> */}
    </AboutWrapper>
  )
}

export default About

import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import defaultAvi from '../img/default_avatar.png'
import { ICONS } from '../theme/constants'
import { media } from '../theme/globalStyle'
import useCvData from './cvData'
// import { Dump } from '../util/helpers'
import {
  Heading as H,
  ItemHeader as IH,
  ItemWrapper as IW,
  StyledDiv as SD,
  StyledHyperLink as SHL,
  UpperCaseHeading as UH
} from './shared'

const AboutWrapper = styled(IW)`
  grid-area: ab;
`

const AboutLayout = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'name     name     name     name     pic      pic     '
    'label    label    label    label    pic      pic     '
    'email    email    site     site     phone    phone   '
    'about    about    about    about    about    about   '
    'location location location location location location'
    'profiles profiles profiles profiles profiles profiles';
  ${media.monitor`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name     name     name     name     pic      pic     '
      'label    label    label    label    pic      pic     '
      'email    email    site     site     phone    phone   '
      'about    about    about    about    about    about   '
      'location location location location location location'
      'profiles profiles profiles profiles profiles profiles';
  `};
  ${media.giant`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name     name     name     pic      pic     '
      'label    label    label    pic      pic     '
      'email    email    email    .        .       '
      'site     site     site     .        .       '
      'phone    phone    phone    .        .       '
      'about    about    about    about    about   '
      'location location location location location'
      'profiles profiles profiles profiles profiles';
  `};
  ${media.desktop`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name     name     name     pic      pic     '
      'label    label    label    pic      pic     '
      'email    email    email    email    .       '
      'site     site     site     site     .       '
      'phone    phone    phone    phone    .       '
      'about    about    about    about    about   '
      'location location location location location'
      'profiles profiles profiles profiles profiles';
  `};
  ${media.tablet`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name     name     pic      pic     '
      'label    label    pic      pic     '
      'email    email    email    .       '
      'site     site     site     .       '
      'phone    phone    phone    .       '
      'about    about    about    about   '
      'location location location location'
      'profiles profiles profiles profiles';
  `};
  ${media.phone`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name     pic      pic  '
      'label    pic      pic  '
      'email    email    email'
      'site     site     site '
      'phone    phone    phone'
      'about    about    about'
      'location location location'
      'profiles profiles profiles';
  `};
`

const AboutName = styled(UH)`
  grid-area: name;
  font-size: 3rem;
  font-family: ${props => props.theme.fontHeader};
  margin: 0.1rem 0rem 0.1rem 0rem;
  padding: 0.1rem 0rem 0.1rem 0rem;
`
// top right bottom left
const AboutLabel = styled(H)`
  grid-area: label;
  font-size: 1.8rem;
  margin: 0.1rem 0rem 0.1rem 0rem;
  padding: 0.1rem 0rem 0.1rem 0rem;
`

const AboutImg = styled.img`
  grid-area: pic;
  object-fit: cover;
  margin: 1rem;
  padding: 0rem;
  width: 80%;
  border-radius: 50%;
  background-image: url(${props => props.src};);
  ${media.giant`
    width: 80%;
  `};
  ${media.desktop`
    width: 80%;
  `};
  ${media.tablet`
    width: 80%;
  `};
  ${media.phone`
    width: 80%;
  `};
`

// start end centre stretch
const AboutEmail = styled(SHL)`
  grid-area: email;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutPhone = styled(SHL)`
  grid-area: phone;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutWebsite = styled(SHL)`
  grid-area: site;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const SummaryHeader = styled(IH)`
  grid-area: about;
`

const AboutSummary = styled(SD)`
  grid-area: about;
  padding: 1rem 0rem 0rem 0rem;
  margin: 0.75rem 0rem 0rem 0rem;
  ul {
    padding: 0rem;
    margin: 0rem;
    li {
      padding-top: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`

const LocationHeader = styled(IH)`
  grid-area: location;
`

const Location = styled(SD)`
  grid-area: location;
  padding: 1rem 0rem 0rem 0rem;
  margin: 0.75rem 0rem 0rem 0rem;
  span {
    &:not(:last-child)::after {
      margin-top: 0.5rem;
      display: inline-block;
      white-space: pre;
      content: ', ';
    }
  }
`

// const Profiles = styled(SD)`
//   grid-area: profiles;
//   border-top: 2px solid ${props => props.theme.dark};
//   padding: 1rem 0rem 0rem 0rem;
//   margin: 2rem 0rem 0rem 0rem;
//   ul {
//     padding: 0rem;
//     margin: 0rem;
//     li {
//       padding-top: 0.5rem;
//       margin-top: 0.5rem;
//     }
//   }
// `

const About = () => {
  const {
    name,
    label,
    picture,
    email,
    phone,
    website,
    summary,
    location
  } = useCvData().basics
  return (
    <AboutWrapper>
      {/* <Dump props={({ theme }) => theme.primary} /> */}
      <AboutLayout>
        <AboutName>{name}</AboutName>
        <AboutLabel>{label}</AboutLabel>
        <AboutImg src={picture || defaultAvi} />
        <AboutEmail
          href={`mailto:${email}?subject=Hi ${name} 👋`}
          target="_blank"
          rel="noopener">
          <Icon
            icon={ICONS.ENVELOPE}
            size={20}
            // color={({ theme }) => theme.primary}
            viewbox={'-5 0 32 32'}
          />
          {email}
        </AboutEmail>
        <AboutPhone href={phone} target="_blank" rel="noopener">
          <Icon
            icon={ICONS.PHONE}
            size={20}
            // color={({ theme }) => theme.primary}
            viewbox={'-5 0 32 32'}
          />
          {phone}
        </AboutPhone>
        <AboutWebsite href={website} target="_blank" rel="noopener">
          <Icon
            icon={ICONS.GLOBE}
            size={20}
            // color={({ theme }) => theme.primary}
            viewbox={'-5 0 32 32'}
          />
          {website}
        </AboutWebsite>
        <SummaryHeader>about</SummaryHeader>
        <AboutSummary>
          {typeof summary === 'string' ? (
            summary
          ) : (
            <ul>
              {summary.map((line, index) => {
                return <li key={index}>{line}</li>
              })}
            </ul>
          )}
        </AboutSummary>
        <LocationHeader>location</LocationHeader>
        <Location>
          {Object.values(location).map((line, index) => {
            return (
              <React.Fragment>
                {line.length === 0 ? null : (
                  <span key={index}>{line}</span>
                )}
              </React.Fragment>
            )
          })}
        </Location>
        {/* <Profiles>
          TODO: fix this!
          <ul>
            {profiles.map((line, index) => {
              // return <Dump props={line} />
              // return <li key={index}>{line}</li>
            })}
          </ul>
        </Profiles> */}
      </AboutLayout>
    </AboutWrapper>
  )
}

export default About

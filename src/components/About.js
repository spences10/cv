import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { media } from '../theme/globalStyle'

// import { Dump } from '../util/helpers'

import {
  UpperCaseHeading as UH,
  Heading as H,
  ItemWrapper as IW,
  StyledHyperLink as SHL,
  StyledDiv as SD,
  StyledP as SP
} from './shared/SharedComponents'

import defaultAvi from '../img/default_avatar.png'

import { ICONS } from '../theme/constants'
import Icon from '../components/Icon'

const AboutWrapper = IW.extend`
  grid-area: a;
`

const AboutLayout = SD.extend`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'name  name  name  name  pic   pic  '
    'label label label label pic   pic  '
    'email email site  site  phone phone'
    'about about about about about about';
  ${media.monitor`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name  name  name  name  pic   pic  '
      'label label label label pic   pic  '
      'email email site  site  phone phone'
      'about about about about about about';
  `};
  ${media.giant`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name  name  name  pic pic    '
      'label label label pic pic    '
      'email email email .   .      '
      'site  site  site  .   .      '
      'phone phone phone .   .      '
      'about about about about about';
  `};
  ${media.desktop`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name  name  name  pic   pic  '
      'label label label pic   pic  '
      'email email email email .    '
      'site  site  site  site  .    '
      'phone phone phone phone .    '
      'about about about about about';
  `};
  ${media.tablet`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name  name  pic   pic  '
      'label label pic   pic  '
      'email email email .    '
      'site  site  site  .    '
      'phone phone phone .    '
      'about about about about';
  `};
  ${media.phone`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'name  pic   pic  '
      'label pic   pic  '
      'email email email'
      'site  site  site '
      'phone phone phone'
      'about about about';
  `};
`

const AboutName = UH.extend`
  grid-area: name;
  font-size: 3rem;
  font-family: ${props => props.theme.fontHeader};
  margin: 0.1rem 0rem 0.1rem 0rem;
  padding: 0.1rem 0rem 0.1rem 0rem;
`
// top right bottom left
const AboutLabel = H.extend`
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
  /* filter: grayscale(100%); */
`

// start end centre stretch
const AboutEmail = SHL.extend`
  grid-area: email;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutPhone = SHL.extend`
  grid-area: phone;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutWebsite = SHL.extend`
  grid-area: site;
  padding: 0.1rem 0rem;
  margin: 0.1rem 0rem;
`

const AboutSummary = SD.extend`
  grid-area: about;
  border-top: 2px solid ${props => props.theme.light};
  padding: 1rem 0rem 0rem 0rem;
  margin: 2rem 0rem 0rem 0rem;
`

class About extends React.Component {
  // const About = props => {
  render() {
    const {
      name,
      label,
      picture,
      email,
      phone,
      website,
      summary
    } = this.props.aboutData

    const { theme } = this.props

    return (
      <AboutWrapper>
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
              color={theme.primary}
              viewbox={'-5 0 32 32'}
            />
            {email}
          </AboutEmail>
          <AboutPhone href={phone} target="_blank" rel="noopener">
            <Icon
              icon={ICONS.PHONE}
              size={20}
              color={theme.primary}
              viewbox={'-5 0 32 32'}
            />
            {phone}
          </AboutPhone>
          <AboutWebsite href={website} target="_blank" rel="noopener">
            <Icon
              icon={ICONS.GLOBE}
              size={20}
              color={theme.primary}
              viewbox={'-5 0 32 32'}
            />
            {website}
          </AboutWebsite>
          <AboutSummary>{summary}</AboutSummary>
          {/* <Dump props={props} /> */}
        </AboutLayout>
      </AboutWrapper>
    )
  }
}

About.propTypes = {
  aboutData: PropTypes.object,
  theme: PropTypes.object
}

export default withTheme(About)

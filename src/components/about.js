import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'
import { Dump } from '../util/helpers'

import {
  UpperCaseHeading as UH,
  Heading as H,
  ItemWrapper as IW,
  StyledHyperLink as SHL,
  StyledDiv as SD
} from './shared'

import defaultAvi from '../img/default_avatar.png'

import { ICONS } from '../theme/constants'
import Icon from '../components/Icon'

const AboutWrapper = styled(IW)`
  grid-area: a;
`

const AboutLayout = styled(SD)`
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

const AboutName = styled(UH)`
  grid-area: name;
  font-size: 3rem;
  /* font-family: ${props => props.theme.fontHeader}; */
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
  /* background-image: url(${props => props.src};); */
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

const AboutSummary = styled(SD)`
  grid-area: about;
  /* border-top: 2px solid ${props => props.theme.dark}; */
  padding: 1rem 0rem 0rem 0rem;
  margin: 2rem 0rem 0rem 0rem;
`

const About = ({ data }) => <Dump data={data} />

About.propTypes = {
  aboutData: PropTypes.object,
  theme: PropTypes.object
}

export default props => (
  <StaticQuery
    query={graphql`
      query Basics {
        cvDataCv {
          basics {
            name
            label
            picture
            email
            phone
            website
            summary
            location {
              address
              postalCode
              city
              countryCode
              region
            }
            profiles {
              network
              username
              url
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
)

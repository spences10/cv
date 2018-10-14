import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import SEO from './seo'

import {
  ThemeSelectContext,
  ThemeSelectProvider
} from '../contexts/ThemeSelectContext'

// import { Dump } from '../util/helpers'

import { media, GlobalStyle } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . ab ab ab ab . .' /* about */
    '. . sk sk sk sk . .' /* skills */
    '. . wo wo wo wo . .' /* work */
    '. . vo vo vo vo . .' /* volunteer */
    '. . ed ed ed ed . .' /* education */
    '. . aw aw aw aw . .' /* awards */
    '. . pu pu pu pu . .' /* publications */
    '. . la la la la . .' /* languages */;
  background: ${props => props.theme.background};
  ${media.monitor`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . ab ab ab ab . .'
      '. . sk sk sk sk . .'
      '. . wo wo wo wo . .'
      '. . vo vo vo vo . .'
      '. . ed ed ed ed . .'
      '. . aw aw aw aw . .'
      '. . pu pu pu pu . .'
      '. . la la la la . .'
      ;
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      darkslateblue, 
      ${props => props.theme.secondary});
  `};
  ${media.giant`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . ab ab ab ab . .'
      '. . sk sk sk sk . .'
      '. . wo wo wo wo . .'
      '. . vo vo vo vo . .'
      '. . ed ed ed ed . .'
      '. . aw aw aw aw . .'
      '. . pu pu pu pu . .'
      '. . la la la la . .'
      ;
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      goldenrod, 
      ${props => props.theme.secondary});
  `};
  ${media.desktop`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . ab ab ab ab . .'
      '. . sk sk sk sk . .'
      '. . wo wo wo wo . .'
      '. . vo vo vo vo . .'
      '. . ed ed ed ed . .'
      '. . aw aw aw aw . .'
      '. . pu pu pu pu . .'
      '. . la la la la . .'
      ;
    /* background: dodgerblue; */
    background: linear-gradient(
      0.25turn, 
      dodgerblue, 
      ${props => props.theme.secondary});
  `};
  ${media.tablet`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'ab ab ab ab ab ab' 
      'sk sk sk sk sk sk' 
      'wo wo wo wo wo wo' 
      'vo vo vo vo vo vo' 
      'ed ed ed ed ed ed' 
      'aw aw aw aw aw aw'
      'pu pu pu pu pu pu'
      'la la la la la la'
      ;
    /* background: mediumseagreen; */
    background: linear-gradient(
      0.25turn, 
      mediumseagreen, 
      ${props => props.theme.secondary});
  `};
  ${media.phone`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'ab ab ab ab'
      'sk sk sk sk'
      'wo wo wo wo'
      'vo vo vo vo'
      'ed ed ed ed'
      'aw aw aw aw'
      'pu pu pu pu'
      'la la la la'
      ;
    /* background: palevioletred; */
    background: linear-gradient(
      0.25turn, 
      palevioletred, 
      ${props => props.theme.secondary});
  `};
`
// const ThemeSelectWrapper = styled.div`
//   position: fixed;
//   bottom: 0;
//   right: 0;
// `

const Layout = ({ children, data }) => {
  const {
    title,
    description,
    imageLink,
    siteLanguage
  } = data.site.siteMetadata
  return (
    <ThemeSelectProvider>
      <ThemeSelectContext.Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <PageContainer>
              <GlobalStyle />
              <SEO
                title={title}
                description={description || 'nothin’'}
                image={imageLink}
              />
              <Helmet>
                <html lang={siteLanguage} />
              </Helmet>
              {/* <Dump props={data.site.siteMetadata.siteLanguage} /> */}
              {children}
            </PageContainer>
          </ThemeProvider>
        )}
      </ThemeSelectContext.Consumer>
    </ThemeSelectProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutData {
        site {
          siteMetadata {
            title
            siteLanguage
            description
            imageLink
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

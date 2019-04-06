import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import {
  ThemeSelectContext,
  ThemeSelectProvider
} from '../contexts/ThemeSelectContext'
// import { Dump } from '../util/helpers'
import { GlobalStyle, media } from '../theme/globalStyle'
import SEO from './seo'
import {
  MainTemplateArea,
  PhoneTemplateArea,
  TabletTemplateArea
} from './shared'
import { useSiteMetadata } from './siteMetadata'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas: ${MainTemplateArea};
  background: ${props => props.theme.background};
  ${media.monitor`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas: ${MainTemplateArea};
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      darkslateblue, 
      ${props => props.theme.secondary});
  `};
  ${media.giant`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas: ${MainTemplateArea};
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      goldenrod, 
      ${props => props.theme.secondary});
  `};
  ${media.desktop`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:${MainTemplateArea};
    /* background: dodgerblue; */
    background: linear-gradient(
      0.25turn, 
      dodgerblue, 
      ${props => props.theme.secondary});
  `};
  ${media.tablet`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas: ${TabletTemplateArea};
    /* background: mediumseagreen; */
    background: linear-gradient(
      0.25turn, 
      mediumseagreen, 
      ${props => props.theme.secondary});
  `};
  ${media.phone`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas: ${PhoneTemplateArea};
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

const Layout = ({ children }) => {
  const {
    title,
    description,
    imageLink,
    siteLanguage
  } = useSiteMetadata()
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

export default Layout

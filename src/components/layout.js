import PropTypes from 'prop-types'
import React from 'react'
import SEO from 'react-seo-component'
import styled, { ThemeProvider } from 'styled-components'
import {
  ThemeSelectContext,
  ThemeSelectProvider
} from '../contexts/ThemeSelectContext'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { GlobalStyle, media } from '../theme/globalStyle'
import {
  MainTemplateArea,
  PhoneTemplateArea,
  TabletTemplateArea
} from './shared'

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

export const Layout = ({ children }) => {
  const {
    title,
    description,
    siteUrl,
    imageLink,
    siteLanguage,
    siteLocale,
    twitterUsername,
    firstName,
    lastName
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
                description={description || `nothin’`}
                image={`${siteUrl}${imageLink}`}
                pathname={siteUrl}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={`${firstName} ${lastName}`}
                article={true}
                publishedDate={'2019-11-25T20:48:58.859Z'}
                modifiedDate={new Date(Date.now()).toISOString()}
              />
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

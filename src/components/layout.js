import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

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
    '. . a a a a . .'
    '. . s s s s . .'
    '. . w w w w . .'
    '. . e e e e . .';
  background: ${props => props.theme.background};
  ${media.monitor`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . a a a a . .'
      '. . s s s s . .'
      '. . w w w w . .'
      '. . e e e e . .';
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
      '. . a a a a . .'
      '. . s s s s . .'
      '. . w w w w . .'
      '. . e e e e . .';
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
      '. . a a a a . .'
      '. . s s s s . .'
      '. . w w w w . .'
      '. . e e e e . .';
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
      'a a a a a a'
      's s s s s s'
      'w w w w w w'
      'e e e e e e';
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
      'a a a a'
      's s s s'
      'w w w w'
      'e e e e';
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

const Layout = ({ children, data }) => (
  <ThemeSelectProvider>
    <ThemeSelectContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <PageContainer>
            <GlobalStyle />
            siteTitle=
            {data.site.siteMetadata.title}
            {/* <Dump props={work} /> */}
            {children}
          </PageContainer>
        </ThemeProvider>
      )}
    </ThemeSelectContext.Consumer>
  </ThemeSelectProvider>
)

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
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

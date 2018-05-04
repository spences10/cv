import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ThemeSelect from '../components/ThemeSelect'

import styled, { ThemeProvider } from 'styled-components'
import { theme1, theme2 } from '../theme/globalStyle'
import { siteMeta, nameContent } from '../constants'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . a a a a . . '
    '. . w w w w . . '
    '. . s s s s . . '
    '. . e e e e . . ';
  background: ${props => props.theme.background};
`

class Layout extends React.Component {
  state = {
    apiUrl: 'https://cvjson.now.sh/',
    theme: theme1
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }

  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={this.state.theme}>
        <PageContainer>
          <Helmet title={nameContent} meta={siteMeta} />
          {children()}
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </PageContainer>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

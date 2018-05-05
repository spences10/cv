import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ThemeSelect from '../components/ThemeSelect'

import styled, { ThemeProvider } from 'styled-components'
import { theme1, theme2 } from '../theme/globalStyle'
import { siteMeta, nameContent } from '../constants'

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
        <React.Fragment>
          <Helmet title={nameContent} meta={siteMeta} />
          {children()}
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

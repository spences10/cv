import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

import styled, { ThemeProvider } from 'styled-components'
import { theme1, theme2 } from '../theme/globalStyle'
import { siteMeta, nameContent } from '../constants'

class Layout extends React.Component {
  state = {
    apiUrl: 'https://cvjson.now.sh/',
    theme: theme1
  }
  render() {
    const { children, data } = this.props
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <Helmet title={nameContent} meta={siteMeta} />
          {children()}
        </div>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

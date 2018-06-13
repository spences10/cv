import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { siteMeta, nameContent } from '../constants'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Helmet title={nameContent} meta={siteMeta} />
        {children()}
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

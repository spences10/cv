import React from 'react'
import PropTypes from 'prop-types'

import { themes } from '../theme/globalStyle'

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const ThemeSelectContext = React.createContext()

export class ThemeSelectProvider extends React.Component {
  state = {
    theme: themes['theme1']
  }

  handleThemeChange = e => {
    const key = e.target.value
    const theme = themes[key]
    this.setState({ theme })
  }

  render() {
    return (
      <ThemeSelectContext.Provider
        value={{
          ...this.state,
          handleThemeChange: this.handleThemeChange
        }}>
        {this.props.children}
      </ThemeSelectContext.Provider>
    )
  }
}

ThemeSelectProvider.propTypes = {
  children: PropTypes.any
}

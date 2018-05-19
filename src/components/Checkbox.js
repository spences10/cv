import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Check = styled.input.attrs({
  type: 'checkbox'
})``
const Checkbox = props => {
  return (
    <React.Fragment>
      <Check>{props}</Check>
    </React.Fragment>
  )
}

Checkbox.propTypes = {}

export default Checkbox

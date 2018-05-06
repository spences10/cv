import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.svg`
  display: inline-block;
  path {
    fill: ${props => props.color};
    stroke: ${props => props.color};
    stroke-width: 0;
  }
`

const Icon = props => (
  <StyledIcon
    viewBox={props.viewbox}
    width={props.size}
    height={props.size}
    color={props.color}
    preserveAspectRatio="xMidYMid meet">
    <path d={props.icon} />
  </StyledIcon>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.number,
  viewbox: PropTypes.string
}

Icon.defaultProps = {
  size: 100,
  viewbox: '0 0 32 32'
}

export default Icon

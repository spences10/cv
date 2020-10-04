import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.svg`
  path {
    fill: ${(props) => props.color};
    stroke: ${(props) => props.color};
    stroke-width: 0;
  }
  display: inline-flex;
  align-self: center;
  top: 0.5rem;
  position: relative;
`

const Icon = (props) => {
  const { color, icon, size, viewbox } = props
  return (
    <StyledIcon
      viewBox={viewbox}
      width={size}
      height={size}
      color={color}
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={icon} />
    </StyledIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.number,
  viewbox: PropTypes.string,
}

Icon.defaultProps = {
  size: 100,
  viewbox: '0 0 32 32',
  width: '100%',
  height: '100%',
}

export default Icon

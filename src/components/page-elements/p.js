import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  margin-bottom: 1.5rem;
  strong {
    font-weight: 500;
  }
  em {
    font-style: italic;
  }
`

export const P = props => {
  const { children, ...rest } = props
  return <StyledText {...rest}>{children}</StyledText>
}

import { styled } from 'linaria/react'
import React from 'react'

const StyledA = styled.a`
  text-decoration: underline;
  color: var(--colour-on-background);
  text-decoration-color: var(--colour-on-background);
  &:hover {
    opacity: 0.5;
  }
`

export const A = props => {
  return (
    <StyledA {...props} id={props.id}>
      {props.children}
    </StyledA>
  )
}

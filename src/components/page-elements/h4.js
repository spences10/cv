import React from 'react'
import styled from 'styled-components'

const StyledText = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  margin-top: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H4 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}

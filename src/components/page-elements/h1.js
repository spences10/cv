import React from 'react'
import styled from 'styled-components'

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H1 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}

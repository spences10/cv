import { styled } from 'linaria/react'
import React from 'react'
import { useTheme } from '../../theme/theme-provider'

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H1 = props => {
  const theme = useTheme()
  return (
    <StyledText theme={theme} {...props}>
      {props.children}
    </StyledText>
  )
}

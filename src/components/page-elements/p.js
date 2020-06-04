import { styled } from 'linaria/react'
import React from 'react'
import { useTheme } from '../../theme/theme-provider'

const StyledText = styled.p`
  margin-bottom: 1.5rem;
  strong {
    font-weight: 500;
  }
  em {
    font-style: italic;
  }
  font-family: ${({ theme }) => theme.fontFamily.sans};
`

export const P = props => {
  const theme = useTheme()
  const { children, ...rest } = props
  return (
    <StyledText theme={theme} {...rest}>
      {children}
    </StyledText>
  )
}

import styled from 'styled-components'

export const StyledLink = styled.a`
  color: ${props => props.theme.primary};
  cursor: pointer;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

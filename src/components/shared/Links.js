import styled from 'styled-components'
import Link from 'gatsby-link'

/* background: linear-gradient(0.25turn, #e66465, #9198e5); */
export const StyledHyperLink = styled.a`
  cursor: pointer;
  &:visited,
  &:active {
    color: ${props => props.theme.primary};
  }
  &:hover {
    color: ${props => props.theme.secondary};
  }
  color: ${props => props.theme.primary};
`

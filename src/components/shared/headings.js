// heading are uppercase with spacing

// normal font weight 400-500
// heavy font weight 600-700
import styled from 'styled-components'

export const Heading = styled.p`
  color: ${props => props.theme.dark};
  font-family: ${props => props.theme.fontHeader};
  font-weight: 700;
`

export const UpperCaseHeading = Heading.extend`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontHeader};
  font-weight: 700;
  &:hover {
    letter-spacing: 0.15rem;
    transition: all 1s;
  }
`

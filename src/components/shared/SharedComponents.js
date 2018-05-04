import styled from 'styled-components'
import Link from 'gatsby-link'

export const StyledDiv = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`

export const StyledP = styled.p`
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`

export const ItemWrapper = styled.div`
  /* border-top: 4px solid ${props => props.theme.primary}; */
  border-radius: 5px;
  box-shadow: 0 13px 20px rgba(0, 0, 0, 0.3);
  margin: 1rem;
  padding: 0rem 0rem 1rem 0rem;
  font-family: ${props => props.theme.fontBody};
  font-weight: 400;
  color: ${props => props.theme.dark};
  background: ${props => props.theme.foreground};
  :before {
    border-radius: 5px 5px 0px 0px;
    height: 4px;
    display: block;
    background: linear-gradient(
      0.25turn, 
      ${props => props.theme.primary}, 
      ${props => props.theme.secondary});
    content: '';
  }
`

// heading are uppercase with spacing

// normal font weight 400-500
// heavy font weight 600-700

export const Heading = StyledP.extend`
  color: ${props => props.theme.dark};
  font-family: ${props => props.theme.fontHeader};
  font-weight: 700;
`

export const UpperCaseHeading = Heading.extend`
  text-transform: uppercase;
  &:hover {
    letter-spacing: 0.15rem;
    transition: all 1s;
  }
`

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

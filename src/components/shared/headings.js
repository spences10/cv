// heading are uppercase with spacing
import styled from 'styled-components'

const Heading = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  ${props => props.theme.font};
`

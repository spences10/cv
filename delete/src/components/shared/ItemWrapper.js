import styled from 'styled-components'

export const ItemWrapper = styled.div`
  border-top: 4px solid ${props => props.theme.primary};
  border-radius: 5px;
  box-shadow: 0 13px 20px rgba(0, 0, 0, 0.3);
  margin: 1rem;
  padding: 1rem;
  font-family: ${props => props.theme.fontBody};
  font-weight: 400;
  color: ${props => props.theme.dark};
  background: ${props => props.theme.foreground};
`

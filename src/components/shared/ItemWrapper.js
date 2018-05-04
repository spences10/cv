import styled from 'styled-components'

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

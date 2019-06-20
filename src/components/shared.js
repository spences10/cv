import styled from 'styled-components'

export const MainTemplateArea = `
  '. . ab ab ab ab . .' /* about */
  '. . sk sk sk sk . .' /* skills */
  '. . wo wo wo wo . .' /* work */
  '. . vo vo vo vo . .' /* volunteer */
  '. . ed ed ed ed . .' /* education */
  '. . aw aw aw aw . .' /* awards */
  '. . pu pu pu pu . .' /* publications */
  '. . la la la la . .' /* languages */
  '. . in in in in . .' /* interests */
  '. . re re re re . .' /* references */
`

export const TabletTemplateArea = `
  'ab ab ab ab ab ab' 
  'sk sk sk sk sk sk' 
  'wo wo wo wo wo wo' 
  'vo vo vo vo vo vo' 
  'ed ed ed ed ed ed' 
  'aw aw aw aw aw aw'
  'pu pu pu pu pu pu'
  'la la la la la la'
  'in in in in in in'
  're re re re re re'
`

export const PhoneTemplateArea = `
  'ab ab ab ab'
  'sk sk sk sk'
  'wo wo wo wo'
  'vo vo vo vo'
  'ed ed ed ed'
  'aw aw aw aw'
  'pu pu pu pu'
  'la la la la'
  'in in in in'
  're re re re'
`

export const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
`

export const StyledP = styled.p`
  padding: 0;
  margin: 0;
`

export const StyledSpan = styled.span`
  margin: 0.5rem;
  padding: 0.5rem;
`

export const StyledLi = styled.li`
  display: inline-block;
  margin: 0.25rem 0.25rem 0.25rem 0.25rem;
  padding: 0.25rem 0.8rem 0.25rem 0.5rem;
  color: 1px solid ${props => props.theme.fontLight};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.primary};
  &:hover {
    background: linear-gradient(
      0.25turn,
      ${props => props.theme.primary},
      ${props => props.theme.secondary}
    );
    color: ${props => props.theme.light};
    border: 1px solid ${props => props.theme.background};
  }
  cursor: pointer;
`

export const StyledList = styled.ul`
  margin: 0.5rem 0.0125rem;
  padding: 0.5rem 0.0125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`

export const ItemHeader = styled(StyledSpan)`
  text-transform: uppercase;
  font-size: 0.6rem;
  padding: 0;
  margin: 0;
  hr {
    border: 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      ${props => props.theme.secondary},
      rgba(0, 0, 0, 0)
    );
  }
`

export const ItemWrapper = styled.div`
  /* border-top: 4px solid ${props => props.theme.primary}; */
  border-radius: 5px;
  box-shadow: 0 13px 20px rgba(0, 0, 0, 0.3);
  margin: 1rem;
  padding: 0rem 0rem 1rem 0rem;
  font-family: ${props => props.theme.fontBody};
  font-weight: 400;
  color: ${props => props.theme.fontDark};
  background: ${props => props.theme.foreground};
  :before {
    border-radius: 5px 5px 0px 0px;
    height: 5px;
    display: block;
    background: linear-gradient(
      0.25turn, 
      ${props => props.theme.primary}, 
      ${props => props.theme.secondary});
    content: '';
  }
`

export const SectionHeader = styled.span`
  margin: 0.5rem;
  padding: 0.5rem;
  color: ${props => props.theme.fontDark};
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  &:hover {
    letter-spacing: 0.5rem;
    transition: all 10s;
  }
  text-decoration: underline;
`

// heading are uppercase with spacing

// normal font weight 400-500
// heavy font weight 600-700

export const Heading = styled(StyledP)`
  color: ${props => props.theme.fontDark};
  font-family: ${props => props.theme.fontHeader};
  font-weight: 700;
`

export const UpperCaseHeading = styled(Heading)`
  text-transform: uppercase;
  &:hover {
    letter-spacing: 0.15rem;
    transition: all 10s;
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

export const WeightAndColour = styled(StyledSpan)`
  color: ${props => props.theme.fontDark};
  font-weight: 700;
  font-size: 0.8rem;
  /* text-transform: uppercase; */
  letter-spacing: 0.15rem;
  &:hover {
    letter-spacing: 0.5rem;
    transition: all 10s;
  }
`

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

// import { Dump } from '../util/helpers'

import {
  ItemWrapper as IW,
  ItemHeader as IH,
  WeightAndColour as WC
} from './shared'

const InterestsWrapper = styled(IW)`
  grid-area: in;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const InterestsTitle = styled(WC)`
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const InterestHeader = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`

const StyledList = styled.ul`
  margin: 0.5rem 0.0125rem;
  padding: 0.5rem 0.0125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`

const StyledLi = styled.li`
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

const Interests = ({ data }) => {
  const { interests } = data.cvDataCv
  // console.log('=====================')
  // console.log(this.props)
  // console.log('=====================')
  return (
    <InterestsWrapper>
      <ContentWrapper>
        <InterestsTitle>interests</InterestsTitle>
        {/* <Dump props={Interests} /> */}
        {Object.keys(interests).map((key, index) => {
          return (
            <React.Fragment key={index}>
              <InterestHeader>
                <StyledList data-tip="Interests Detail">
                  {interests[key].name}
                </StyledList>
              </InterestHeader>
              {interests[key].keywords.map((key, index) => {
                return <StyledLi key={key + index}>{key}</StyledLi>
              })}
            </React.Fragment>
          )
        })}
      </ContentWrapper>
      <ReactTooltip />
    </InterestsWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Interests {
        cvDataCv {
          interests {
            name
            keywords
          }
        }
      }
    `}
    render={data => <Interests data={data} {...props} />}
  />
)

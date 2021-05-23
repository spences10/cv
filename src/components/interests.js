import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import useCvData from './cvData'
// import { Dump } from '../util/helpers'
import {
  ItemWrapper as IW,
  StyledLi as LI,
  StyledList as SL,
  StyledSpan as SS,
  WeightAndColour as WC,
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

const InterestHeader = styled(SS)`
  margin: 0rem;
  padding: 0rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`

const StyledList = styled(SL)``

const StyledLi = styled(LI)``

export const Interests = () => {
  const { interests } = useCvData()
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

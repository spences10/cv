import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'

import {
  ItemWrapper as IW,
  WeightAndColour as WC,
  StyledDiv as SD,
  ItemHeader as IH
} from './shared'

const AwardsWrapper = styled(IW)`
  grid-area: aw;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const AwardsTitle = styled(WC)`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const AwardsItemWrapper = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'ti ti aw aw date date'
    'sh sh sh sh sh   sh  '
    'su su su su su   su  ';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const AwardItemTitle = styled.span`
  grid-area: ti;
`

const AwardItemAwarder = styled.span`
  grid-area: aw;
`

const AwardItemDate = styled.span`
  grid-area: date;
`

const AwardItemHeader = styled(IH)`
  grid-area: sh;
`

const AwardItemSummary = styled.span`
  grid-area: su;
  padding-top: 0.5rem;
`

const Awards = ({ data }) => {
  const { awards } = data.cvDataCv

  const getAwards = awards.map((item, index) => {
    const awardDate = format(item.date, 'MMM yyyy')
    return (
      <AwardsItemWrapper key={index}>
        <AwardItemTitle>{item.title}</AwardItemTitle>
        <AwardItemAwarder>{item.awarder}</AwardItemAwarder>
        <AwardItemDate>{awardDate}</AwardItemDate>
        {/* TODO: add spacer here */}
        <AwardItemHeader>summary</AwardItemHeader>
        <AwardItemSummary>{item.summary}</AwardItemSummary>
      </AwardsItemWrapper>
    )
  })

  return (
    <AwardsWrapper>
      <ContentWrapper>
        <AwardsTitle>awards</AwardsTitle>
        {getAwards}
      </ContentWrapper>
    </AwardsWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Awards {
        cvDataCv {
          awards {
            title
            date
            awarder
            summary
          }
        }
      }
    `}
    render={data => <Awards data={data} {...props} />}
  />
)

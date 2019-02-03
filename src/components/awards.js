import { format, isValid } from 'date-fns'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'
import {
  ItemHeader as IH,
  ItemWrapper as IW,
  StyledDiv as SD,
  WeightAndColour as WC
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
    'ti ti ad ad date date'
    'sh sh sh sh sh   sh  '
    'su su su su su   su  ';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const AwardItemTitle = styled.span`
  grid-area: ti;
`

const AwardItemAwarder = styled.span`
  grid-area: ad;
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
    const awardDate = () => {
      if (isValid(new Date(item.date))) {
        return format(new Date(item.date), 'MMM yyyy')
      } else {
        return null
      }
    }

    return (
      <AwardsItemWrapper key={index}>
        <AwardItemTitle>{item.title}</AwardItemTitle>
        <AwardItemAwarder>{item.awarder}</AwardItemAwarder>
        <AwardItemDate>{awardDate()}</AwardItemDate>
        <AwardItemHeader>summary</AwardItemHeader>
        <AwardItemSummary>{item.summary}</AwardItemSummary>
      </AwardsItemWrapper>
    )
  })

  return (
    <React.Fragment>
      {/* <Dump awards={awards.title} /> */}
      {typeof awards.title === 'undefined' ? null : (
        <AwardsWrapper>
          <ContentWrapper>
            <AwardsTitle>awards</AwardsTitle>
            {getAwards}
          </ContentWrapper>
        </AwardsWrapper>
      )}
    </React.Fragment>
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

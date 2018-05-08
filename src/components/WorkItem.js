import React from 'react'
import PropTypes from 'prop-types'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

import {
  StyledDiv as SD,
  StyledP as SP,
  StyledSpan as SS
} from './shared/SharedComponents'

const WorkItemWrapper = SD.extend`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'comp comp pos pos date date'
    'wh   wh   wh  wh  wh   wh  '
    'w    w    w   w   w    w   '
    'hh   hh   hh  hh  hh   hh  '
    'h    h    h   h   h    h   ';
  margin: 0.5rem;
  padding: 0.5rem;
`

const WeightAndColour = SS.extend`
  color: ${props => props.theme.fontDark};
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  &:hover {
    letter-spacing: 0.5rem;
    transition: all 10s;
  }
`

const Company = WeightAndColour.extend`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const Position = WeightAndColour.extend`
  grid-area: pos;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const Dates = WeightAndColour.extend`
  grid-area: date;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const ItemHeader = SS.extend`
  text-transform: uppercase;
  font-size: 0.6rem;
  padding: 0.25rem 0rem;
  margin: 0.25rem 0rem;
  border-top: 2px solid ${props => props.theme.fontLight};
`

const WorkItemHeader = ItemHeader.extend`
  grid-area: wh;
`

const WorkItemSummary = SP.extend`
  grid-area: w;
  padding: 0.5rem 0rem 0.125rem 0rem;
  margin: 0.5rem 0rem 0.125rem 0rem;
`

const HighlightsHeader = ItemHeader.extend`
  grid-area: hh;
`

const WorkItemHighlights = styled.ul`
  grid-area: h;
  padding: 0rem;
  margin: 0rem;
`

const WorkItemLi = styled.li`
  grid-area: h;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
`

const WorkItem = props => {
  const {
    startDate: propsStartDate,
    endDate: propsEndDate,
    highlights,
    position,
    company,
    summary
  } = props.workItemData
  const getWorkDates = () => {
    const startDate = format(propsStartDate, 'MMM YYYY')
    const endDate = () => {
      if (isValid(propsEndDate)) {
        return format(propsEndDate, 'MMM YYYY')
      } else {
        return 'Present'
      }
    }

    return `${startDate} - ${endDate()}`
  }

  const getHighlights = highlights.map((item, index) => {
    return <WorkItemLi key={index}>{item}</WorkItemLi>
  })

  return (
    <WorkItemWrapper>
      <Company>{company}</Company>
      <Position>{position}</Position>
      <Dates>{getWorkDates()}</Dates>
      <WorkItemHeader>summary</WorkItemHeader>
      <WorkItemSummary>{summary}</WorkItemSummary>
      <HighlightsHeader>highlights</HighlightsHeader>
      <WorkItemHighlights>{getHighlights}</WorkItemHighlights>
    </WorkItemWrapper>
  )
}

WorkItem.propTypes = {
  workItemData: PropTypes.object
}

export default WorkItem

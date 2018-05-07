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
    'w    w    w   w   w    w   '
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

const WorkItemSummary = SP.extend`
  grid-area: w;
  padding: 1rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
  border-top: 2px solid ${props => props.theme.fontLight};
`

const WorkItemHighlights = styled.ul`
  grid-area: h;
  margin: 0rem;
  padding: 0rem;
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
    const startDate = format(propsStartDate, 'MMM, YYYY')
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
    return <li key={index}>{item}</li>
  })

  return (
    <WorkItemWrapper>
      <Company>{company}</Company>
      <Position>{position}</Position>
      <Dates>{getWorkDates()}</Dates>
      <WorkItemSummary>{summary}</WorkItemSummary>
      <WorkItemHighlights>{getHighlights}</WorkItemHighlights>
    </WorkItemWrapper>
  )
}

WorkItem.propTypes = {
  workItemData: PropTypes.object
}

export default WorkItem

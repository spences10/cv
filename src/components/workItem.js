import { format, isValid } from 'date-fns'
import PropTypes from 'prop-types'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {
  ItemHeader as IH,
  StyledDiv as SD,
  StyledP as SP,
  WeightAndColour as WC
} from './shared'

const WorkItemWrapper = styled(SD)`
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

const Company = styled(WC)`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const Position = styled(WC)`
  grid-area: pos;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const Dates = styled(WC)`
  grid-area: date;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const WorkItemHeader = styled(IH)`
  grid-area: wh;
`

const WorkItemSummary = styled(SP)`
  grid-area: w;
  padding: 0.5rem 0rem 0.125rem 0rem;
  margin: 0.5rem 0rem 0.125rem 0rem;
`

const HighlightsHeader = styled(IH)`
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
    organization,
    summary
  } = props.workItemData
  const getWorkDates = () => {
    const startDate = format(propsStartDate, 'MMM yyyy')
    const endDate = () => {
      if (isValid(propsEndDate)) {
        return format(propsEndDate, 'MMM yyyy')
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
      <Company
        data-tip={company ? 'Employer' : 'Volunteering Organisation'}>
        {company ? company : organization}
      </Company>
      <Position>{position}</Position>
      <Dates>{getWorkDates()}</Dates>
      <WorkItemHeader>summary</WorkItemHeader>
      <WorkItemSummary>{summary}</WorkItemSummary>
      <HighlightsHeader>highlights</HighlightsHeader>
      <WorkItemHighlights>{getHighlights}</WorkItemHighlights>
      <ReactTooltip />
    </WorkItemWrapper>
  )
}

WorkItem.propTypes = {
  workItemData: PropTypes.object
}

export default WorkItem

import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'styled-components'

import {
  StyledDiv as SD,
  StyledP as SP
} from './shared/SharedComponents'

const WorkDates = styled.span`
  margin: -1rem;
  padding: -1rem;
`

const WorkItemWrapper = SD.extend`
  margin: 0.5rem;
  padding: 0.5rem;
`

const WorkItemTitle = SP.extend`
  margin: 0rem;
  padding: 0rem;
`

const WorkItemDates = SP.extend``

const WorkItemSummary = SP.extend`
  margin: 0rem;
  padding: 0rem;
`

const WorkItemHighlights = styled.ul`
  margin: 0rem;
  padding: 0rem;
`

const WorkItem = props => {
  const {
    startDate: propsStartDate,
    endDate: propsEndDate
  } = props.workItemData
  const getWorkDates = () => {
    const startDate = moment(propsStartDate).format('MMM, YYYY')
    const endDate = () => {
      if (endDate !== '') {
        return moment(propsEndDate).format('MMM, YYYY')
      } else {
        return 'Present'
      }
    }

    return (
      <WorkDates>
        {startDate} - {endDate()}
      </WorkDates>
    )
  }

  const getHighlights = props.workItemData.highlights.map(
    (item, index) => {
      return <li key={index}>{item}</li>
    }
  )

  return (
    <WorkItemWrapper>
      <WorkItemTitle>
        {props.workItemData.position},{' '}
        <span>{props.workItemData.company}</span>
      </WorkItemTitle>
      <WorkItemDates>{getWorkDates()}</WorkItemDates>
      <WorkItemSummary>{props.workItemData.summary}</WorkItemSummary>
      <WorkItemHighlights>{getHighlights}</WorkItemHighlights>
    </WorkItemWrapper>
  )
}

WorkItem.propTypes = {
  workItemData: PropTypes.object
}

export default WorkItem

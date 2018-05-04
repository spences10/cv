import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import {
  StyledDiv as SD,
  StyledP as SP
} from './shared/SharedComponents'

const WorkDates = styled.span``

const WorkItemWrapper = SD.extend``

const WorkItemTitle = styled.h3``

const WorkItemDates = SP.extend``

const WorkItemSummary = SP.extend``

const WorkItemHighlights = styled.ul``

const WorkItem = props => {
  const {
    startDate: propsStartDate,
    endDate: propsEndDate
  } = props.workItemData
  const getWorkDates = () => {
    const startDate = dayjs(propsStartDate).format('MMM, YYYY')
    const endDate = () => {
      if (endDate !== '') {
        return dayjs(propsEndDate).format('MMM, YYYY')
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

export default WorkItem

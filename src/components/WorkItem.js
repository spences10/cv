import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const WorkDates = styled.span``

const WorkItemWrapper = styled.div``

const WorkItemTitle = styled.h3``

const WorkItemDates = styled.p``

const WorkItemSummary = styled.p``

const WorkItemHighlights = styled.ul``

const WorkItem = props => {
  const getWorkDates = () => {
    const startDate = dayjs(props.workItemData.startDate).format(
      'MMM, YYYY'
    )
    const endDate = () => {
      if (props.workItemData.endDate !== '') {
        return dayjs(props.workItemData.endDate).format('MMM, YYYY')
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

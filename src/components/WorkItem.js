import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const WorkItemWrapper = styled.div``

const WorkTitleLocation = styled.h3``

const StyledWorkDates = styled.p``

const WorkItemSummary = styled.p``

const StyledHighlights = styled.ul``

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
      <span className="startdate">
        {startDate} - {endDate()}
      </span>
    )
  }

  const getHighlights = props.workItemData.highlights.map(
    (item, index) => {
      return <li key={index}>{item}</li>
    }
  )

  return (
    <WorkItemWrapper>
      <WorkTitleLocation>
        {props.workItemData.position},{' '}
        <span>{props.workItemData.company}</span>
      </WorkTitleLocation>
      <StyledWorkDates>{getWorkDates()}</StyledWorkDates>
      <WorkItemSummary>{props.workItemData.summary}</WorkItemSummary>
      <StyledHighlights>{getHighlights}</StyledHighlights>
    </WorkItemWrapper>
  )
}

export default WorkItem

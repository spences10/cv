import React from 'react'
import dayjs from 'dayjs'

const WorkItem = props => {
  const getWorkDates = () => {
    const startDate = dayjs(props.workItemData.startDate).format(
      'MMM, YYYY'
    )
    let endDate = null
    if (props.workItemData.endDate !== '') {
      endDate = dayjs(props.workItemData.endDate).format('MMM, YYYY')
    } else {
      endDate = 'Present'
    }

    return (
      <span className="startdate">
        {startDate} - {endDate}
      </span>
    )
  }

  const getHighlights = props.workItemData.highlights.map(function(
    item,
    index
  ) {
    return <li key={index}>{item}</li>
  })

  return (
    <div className="workItem">
      <h3>
        {props.workItemData.position},{' '}
        <span>{props.workItemData.company}</span>
      </h3>
      <p className="workDates">{getWorkDates()}</p>
      <p>{props.workItemData.summary}</p>
      <ul>{getHighlights}</ul>
    </div>
  )
}

export default WorkItem

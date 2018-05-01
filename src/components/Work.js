import React from 'react'
import WorkItem from './WorkItem'
import styled from 'styled-components'

import { ItemWrapper as IW } from './shared/ItemWrapper'

const WorkWrapper = IW.extend`
  grid-area: w;
`

const Work = props => {
  const getWorkExperience = () => {
    const workItems = []
    props.workData.forEach((val, index) => {
      workItems.push(<WorkItem key={index} workItemData={val} />)
    })
    return workItems
  }

  return <WorkWrapper>{getWorkExperience()}</WorkWrapper>
}

export default Work

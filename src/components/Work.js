import React from 'react'
import WorkItem from './WorkItem'
import styled from 'styled-components'

import { ItemWrapper as IW } from './shared/SharedComponents'

const WorkWrapper = IW.extend`
  grid-area: w;
`

const Work = props => {
  const getWorkExperience = () => {
    const workItems = []
    props.workData.forEach((item, index) => {
      workItems.push(<WorkItem key={index} workItemData={item} />)
    })
    return workItems
  }

  return <WorkWrapper>{getWorkExperience()}</WorkWrapper>
}

export default Work

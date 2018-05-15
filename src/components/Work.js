import React from 'react'
import PropTypes from 'prop-types'

import WorkItem from './WorkItem'

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

Work.propTypes = {
  workData: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Work

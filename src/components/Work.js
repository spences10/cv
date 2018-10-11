import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WorkItem from './WorkItem'

import { ItemWrapper as IW } from './shared/SharedComponents'

const WorkWrapper = styled(IW)`
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

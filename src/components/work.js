import React from 'react'
import styled from 'styled-components'
import useCvData from './cvData'
import { ItemWrapper as IW } from './shared'
// import { Dump } from '../util/helpers'
import WorkItem from './workItem'

const WorkWrapper = styled(IW)`
  grid-area: wo;
`

const Work = () => {
  const { work } = useCvData()

  // return <Dump props={work} />
  return (
    <WorkWrapper>
      {work.map((item, index) => {
        return <WorkItem key={index} workItemData={item} />
      })}
    </WorkWrapper>
  )
}

export default Work

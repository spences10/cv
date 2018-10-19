import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import WorkItem from './workItem'

// import { Dump } from '../util/helpers'

import { ItemWrapper as IW } from './shared'

const WorkWrapper = styled(IW)`
  grid-area: w;
`

const Work = ({ data }) => {
  // return <Dump props={data} />
  const { work } = data.cvDataCv
  const getWorkExperience = () => {
    const workItems = []
    work.forEach((item, index) => {
      workItems.push(<WorkItem key={index} workItemData={item} />)
    })
    return workItems
  }

  return <WorkWrapper>{getWorkExperience()}</WorkWrapper>
}

export default props => (
  <StaticQuery
    query={graphql`
      query Work {
        cvDataCv {
          work {
            company
            position
            website
            startDate
            endDate
            summary
            highlights
          }
        }
      }
    `}
    render={data => <Work data={data} {...props} />}
  />
)

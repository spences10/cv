import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'
import WorkItem from './workItem'

import { ItemWrapper as IW } from './shared'

const VolunteerWrapper = styled(IW)`
  grid-area: v;
`

const Volunteer = ({ data }) => {
  const { volunteer } = data.cvDataCv
  // return <Dump props={work} />
  return (
    <VolunteerWrapper>
      {volunteer.map((item, index) => {
        return <WorkItem key={index} workItemData={item} />
      })}
    </VolunteerWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Volunteer {
        cvDataCv {
          volunteer {
            organization
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
    render={data => <Volunteer data={data} {...props} />}
  />
)

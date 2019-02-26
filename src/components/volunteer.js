import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { ItemWrapper as IW } from './shared'
import WorkItem from './workItem'

const VolunteerWrapper = styled(IW)`
  grid-area: vo;
`

const Volunteer = ({ data }) => {
  const { volunteer } = data.cvDataCv
  return (
    <React.Fragment>
      {volunteer[0].organization.length === 0 ? null : (
        <VolunteerWrapper>
          {volunteer.map((item, index) => {
            return <WorkItem key={index} workItemData={item} />
          })}
        </VolunteerWrapper>
      )}
    </React.Fragment>
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

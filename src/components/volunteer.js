import React from 'react'
import styled from 'styled-components'
import useCvData from './cvData'
import { ItemWrapper as IW } from './shared'
import WorkItem from './workItem'

const VolunteerWrapper = styled(IW)`
  grid-area: vo;
`

export const Volunteer = () => {
  const { volunteer } = useCvData()

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

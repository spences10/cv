import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import { ItemWrapper as IW } from './shared/ItemWrapper'

const EducationWrapper = IW.extend`
  grid-area: e;
`

const EducationTitle = styled.h2``

const EducationItemWrapper = styled.div``

const EducationItemType = styled.h3``

const EducationItemTitle = styled.h4``

const EducationItemDates = styled.p``

const EducationItemSummary = styled.p``

const WorkItemHighlights = styled.ul``

const Education = props => {
  const getEducation = props.educationData.map((item, index) => {
    const educationStartDate = dayjs(item.startDate).format(
      'MMM, YYYY'
    )
    const educationEndDate = () => {
      if (item.endDate !== '') {
        return dayjs(item.endDate).format('MMM, YYYY')
      } else {
        return 'Present'
      }
    }
    return (
      <EducationItemWrapper key={index}>
        <EducationItemType>
          {item.studyType} {item.area}
        </EducationItemType>
        <EducationItemTitle>{item.institution}</EducationItemTitle>
        <EducationItemDates>
          Studied: {educationStartDate} - {educationEndDate()}
        </EducationItemDates>
      </EducationItemWrapper>
    )
  })

  return (
    <EducationWrapper>
      <EducationTitle>Education</EducationTitle>
      {getEducation}
    </EducationWrapper>
  )
}

export default Education

import React from 'react'
import PropTypes from 'prop-types'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

import { ItemWrapper as IW } from './shared/SharedComponents'

const EducationWrapper = IW.extend`
  grid-area: e;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
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
    const educationStartDate = format(item.startDate, 'MMM YYYY')
    const educationEndDate = () => {
      if (isValid(item.endDate)) {
        return format(item.endDate, 'MMM YYYY')
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
      <ContentWrapper>
        <EducationTitle>Education</EducationTitle>
        {getEducation}
      </ContentWrapper>
    </EducationWrapper>
  )
}

Education.propTypes = {
  educationData: PropTypes.array
}

export default Education

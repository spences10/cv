import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import { ItemWrapper as IW } from './shared/ItemWrapper'

const EducationWrapper = IW.extend`
  grid-area: e;
`

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
      <div key={index}>
        <h3>
          {item.studyType} {item.area}
        </h3>
        <h4>{item.institution}</h4>
        <p>
          Studied: {educationStartDate} - {educationEndDate()}
        </p>
      </div>
    )
  })

  return (
    <EducationWrapper>
      <h2>
        <i /> Education
      </h2>
      {getEducation}
    </EducationWrapper>
  )
}

export default Education

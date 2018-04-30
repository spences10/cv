import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const EducationWrapper = styled.div`
  grid-area: e;
`

const Education = props => {
  const getEducation = props.educationData.map(function(item, index) {
    const startDate = dayjs(item.startDate).format('MMM, YYYY')
    let endDate = null
    if (props.educationData.endDate !== '') {
      endDate = dayjs(props.educationData.endDate).format('MMM, YYYY')
    } else {
      endDate = 'Present'
    }
    return (
      <div key={index}>
        <h3>
          {item.studyType} {item.area}
        </h3>
        <h4>{item.institution}</h4>
        <p>
          Studied: {startDate} - {endDate}
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

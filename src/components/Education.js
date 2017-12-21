import React from 'react'
import moment from 'moment'

const Education = props => {
  const getEducation = props.educationData.map(function(item, index) {
    const startdate = moment(item.startDate).format('MMM, YYYY')
    let enddate = null
    if (props.educationData.endDate !== '') {
      enddate = moment(props.educationData.endDate).format('MMM, YYYY')
    } else {
      enddate = 'Present'
    }
    return (
      <div key={index}>
        <h3>
          {item.studyType} {item.area}
        </h3>
        <h4>{item.institution}</h4>
        <p>
          Studied: {startdate} - {enddate}
        </p>
      </div>
    )
  })

  return (
    <section>
      <h2>
        <i /> Education
      </h2>
      {getEducation}
    </section>
  )
}

export default Education

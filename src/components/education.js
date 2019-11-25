import { format, isValid } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'
import useCvData from './cvData'
import {
  ItemWrapper as IW,
  StyledDiv as SD,
  WeightAndColour as WC
} from './shared'

const EducationWrapper = styled(IW)`
  grid-area: ed;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const EducationTitle = styled(WC)`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const EducationItemWrapper = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'ti ti ty ty date date';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const EducationItemType = styled.span`
  grid-area: ty;
`

const EducationItemTitle = styled.span`
  grid-area: ti;
`

const EducationItemDates = styled.span`
  grid-area: date;
`

export const Education = () => {
  const { education } = useCvData()

  // return <Dump data={data} />
  const getEducation = education.map((item, index) => {
    const educationStartDate = format(
      new Date(item.startDate),
      'MMM yyyy'
    )
    const educationEndDate = () => {
      if (isValid(new Date(item.endDate))) {
        return format(new Date(item.endDate), 'MMM yyyy')
      } else {
        return 'Present'
      }
    }
    return (
      <EducationItemWrapper key={index}>
        <EducationItemTitle>{item.institution}</EducationItemTitle>
        <EducationItemType>
          {item.studyType} {item.area}
        </EducationItemType>
        <EducationItemDates>
          {educationStartDate} - {educationEndDate()}
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

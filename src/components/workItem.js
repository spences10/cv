import { differenceInMonths, format, isValid } from 'date-fns'
import PropTypes from 'prop-types'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {
  ItemHeader as IH,
  StyledDiv as SD,
  StyledP as SP,
  WeightAndColour as WC,
} from './shared'

const WorkItemWrapper = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'pos  pos  pos  pos  pos  pos '
    'comp comp comp comp comp comp'
    'date date date date date date '
    'dur  dur  dur  dur  dur  dur '
    'wh   wh   wh  wh  wh   wh  '
    'w    w    w   w   w    w   '
    'hh   hh   hh  hh  hh   hh  '
    'h    h    h   h   h    h   ';
`

const Position = styled(WC)`
  grid-area: pos;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const Company = styled(WC)`
  grid-area: comp;
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
`

const Dates = styled(WC)`
  grid-area: date;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.fontLight};
`

const WorkItemHeader = styled(IH)`
  grid-area: wh;
`

const WorkItemSummary = styled(SP)`
  grid-area: w;
`

const HighlightsHeader = styled(IH)`
  grid-area: hh;
`

const WorkItemHighlights = styled.ul`
  grid-area: h;
  padding: 0rem;
  margin: 0rem;
`

const WorkItemLi = styled.li`
  grid-area: h;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
`

const WorkItem = (props) => {
  const {
    startDate: propsStartDate,
    endDate: propsEndDate,
    highlights,
    position,
    company,
    organization,
    summary,
  } = props.workItemData
  const getWorkDates = () => {
    const startDate = format(new Date(propsStartDate), 'MMM yyyy')
    const endDate = () => {
      if (isValid(new Date(propsEndDate))) {
        return format(new Date(propsEndDate), 'MMM yyyy')
      } else {
        return 'Present'
      }
    }

    const time = differenceInMonths(
      propsEndDate ? new Date(propsEndDate) : new Date(),
      new Date(propsStartDate)
    )

    const years = (time / 12) | 0
    const months = (time % 12) + 1 // JS months start at 0 🤦‍♂
    const timeThere =
      years > 0
        ? `${years > 1 ? `${years}yrs` : `${years}yr`} ${
            months > 1 ? `${months}mos` : `${months}mo`
          }`
        : `${months > 1 ? `${months}mos` : `${months}mo`}`

    return `${startDate} - ${endDate()} (${timeThere})`
  }

  const getHighlights = highlights.map((item, index) => {
    return <WorkItemLi key={index}>{item}</WorkItemLi>
  })

  return (
    <WorkItemWrapper>
      <Position>{position}</Position>
      <Company
        data-tip={company ? 'Employer' : 'Volunteering Organisation'}
      >
        {company ? company : organization}
      </Company>
      <Dates>{getWorkDates()}</Dates>
      <WorkItemHeader>
        summary
        <hr />
      </WorkItemHeader>
      <WorkItemSummary>{summary}</WorkItemSummary>
      <HighlightsHeader>
        highlights
        <hr />
      </HighlightsHeader>
      <WorkItemHighlights>{getHighlights}</WorkItemHighlights>
      <ReactTooltip />
    </WorkItemWrapper>
  )
}

WorkItem.propTypes = {
  workItemData: PropTypes.object,
}

export default WorkItem

import React from 'react'

// import { Dump } from '../util/helpers'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkbox from './Checkbox'

import {
  ItemWrapper as IW,
  ItemHeader as IH
} from './shared/SharedComponents'

const DashboardWrapper = IW.extend`
  grid-area: d;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const StyledList = styled.ul`
  margin: 0.5rem 0.0125rem;
  padding: 0.5rem 0.0125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`

const StyledLi = styled.li`
  display: inline-block;
  margin: 0.25rem 0.25rem 0.25rem 0.25rem;
  padding: 0.25rem 0.8rem 0.25rem 0.5rem;
  color: 1px solid ${props => props.theme.fontLight};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.primary};
  &:hover {
    background: linear-gradient(
      0.25turn,
      ${props => props.theme.primary},
      ${props => props.theme.secondary}
    );
    color: ${props => props.theme.light};
    border: 1px solid ${props => props.theme.background};
    cursor: pointer;
  }
`

const Select = styled.input.attrs({
  type: 'checkbox'
})``

const Dashboard = ({ sections }) => {
  return (
    <DashboardWrapper>
      <ContentWrapper>
        {sections.map((section, index) => {
          return (
            <StyledLi key={index}>
              <Checkbox>{section}</Checkbox>
            </StyledLi>
          )
        })}
        {/* <Dump props={sections} /> */}
      </ContentWrapper>
    </DashboardWrapper>
  )
}

Dashboard.propTypes = {
  sections: PropTypes.array
}

export default Dashboard

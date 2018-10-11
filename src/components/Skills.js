import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Dump } from '../util/helpers'

import { ItemWrapper as IW, ItemHeader as IH } from './shared'

const SkillsWrapper = styled(IW)`
  grid-area: s;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const SkillHeader = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
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
  }
  cursor: pointer;
`

const Skills = ({ data }) => {
  const { skills } = data.cvDataCv
  // console.log('=====================')
  // console.log(this.props)
  // console.log('=====================')
  return (
    <SkillsWrapper>
      <ContentWrapper>
        {/* <Dump props={skills} /> */}
        {Object.keys(skills).map((key, index) => {
          return (
            <React.Fragment key={index}>
              <SkillHeader>
                <StyledList>{skills[key].name}</StyledList>
              </SkillHeader>
              {skills[key].keywords.map((key, index) => {
                return <StyledLi key={key + index}>{key}</StyledLi>
              })}
            </React.Fragment>
          )
        })}
      </ContentWrapper>
    </SkillsWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Skills {
        cvDataCv {
          skills {
            name
            level
            keywords
          }
        }
      }
    `}
    render={data => <Skills data={data} {...props} />}
  />
)

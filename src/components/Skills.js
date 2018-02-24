import React from 'react'
import styled from 'styled-components'

const SkillsWrapper = styled.div`
  grid-area: s;
`

const Skills = props => {
  const getSkills = props.skillsData[0].keywords.map(
    (item, index) => {
      return (
        <li key={index}>
          <span>{item}</span>
        </li>
      )
    }
  )

  return (
    <SkillsWrapper>
      <h2>
        <i /> Skills
      </h2>
      <ul>{getSkills}</ul>
    </SkillsWrapper>
  )
}

export default Skills

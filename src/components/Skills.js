import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ItemWrapper as IW } from './shared/SharedComponents'

const SkillsWrapper = IW.extend`
  grid-area: s;
`

const StyledList = styled.ul``

const StyledLi = styled.li``

class Skills extends React.Component {
  componentDidMount() {}

  render() {
    const { skillsData } = this.props
    // console.log('=====================')
    // console.log(this.props)
    // console.log('=====================')
    return (
      <SkillsWrapper>
        <h2>Skills</h2>
        {Object.keys(skillsData).map((key, index) => {
          return (
            <React.Fragment key={index}>
              <StyledList>{skillsData[key].name}</StyledList>
              {/* <SkillsItem
                  skillsKey={skillsData[key].name}
                  skillsData={skillsData[key]}
                /> */}
              {skillsData[key].keywords.map((key, index) => {
                return <StyledLi key={key + index}>{key}</StyledLi>
              })}
            </React.Fragment>
          )
        })}
      </SkillsWrapper>
    )
  }
}

Skills.propTypes = {
  skillsData: PropTypes.array
}

export default Skills

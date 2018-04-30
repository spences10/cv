import React from 'react'
import styled from 'styled-components'

import SkillsItem from './SkillsItem'

const SkillsWrapper = styled.div`
  grid-area: s;
`

class Skills extends React.Component {
  componentDidMount() {}

  render() {
    const { skillsData } = this.props
    // console.log('=====================')
    // console.log(this.props)
    // console.log('=====================')
    return (
      <SkillsWrapper>
        <h2>
          <i /> Skills
        </h2>
        {Object.keys(skillsData).map((key, index) => {
          return (
            <React.Fragment key={index}>
              <ul>{skillsData[key].name}</ul>
              <li>
                {/* <SkillsItem
                  skillsKey={skillsData[key].name}
                  skillsData={skillsData[key]}
                /> */}
                {skillsData[key].keywords.map(key => {
                  return key
                })}
              </li>
            </React.Fragment>
          )
        })}
      </SkillsWrapper>
    )
  }
}

export default Skills
// const Skills = props => {
//   componentDidMount(){
//     console.log('=====================')
//     console.log(props)
//     console.log('=====================')
//   }
//   // const [webSkills] = this.props.skillsData

//   // const getSkills = skillsData.map((item, index) => {
//   //   return (
//   //     <li>
//   //       <span>{item.keywords}</span>
//   //     </li>
//   //   )
//   // })
//   // const getSkills = props.skillsData[0].keywords.map(
//   //   (item, index) => {
//   //     return (
//   //       <li key={index}>
//   //         <span>{item}</span>
//   //       </li>
//   //     )
//   //   }
//   // )
//   return (
//     <SkillsWrapper>
//       <h2>
//         <i /> Skills
//       </h2>
//       {/* <ul>{getSkills}</ul> */}
//     </SkillsWrapper>
//   )
// }

// export default Skills

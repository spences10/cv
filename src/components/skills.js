import React from 'react'
import { Box } from 'theme-ui'

// const StyledSkills = styled.article`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: auto;
// `

export const Skills = ({ children }) => {
  return (
    <>
      <Box as="article">{children}</Box>
    </>
  )
}

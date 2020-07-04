import React from 'react'
import styled from 'styled-components'

const StyledSkills = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background-color: ${({ theme }) => theme.colors.blue[500]};
`

export const Skills = ({ children }) => {
  return (
    <>
      <StyledSkills>{children}</StyledSkills>
    </>
  )
}

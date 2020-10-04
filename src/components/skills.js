import React from 'react'
import { Grid } from 'theme-ui'

// const StyledSkills = styled.article`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: auto;
// `

export const Skills = ({ children }) => {
  return (
    <Grid
      as="article"
      columns={[2, '1fr 1fr']}
      sx={{
        display: 'grid',
        gridGap: 3,
      }}
    >
      {children}
    </Grid>
  )
}

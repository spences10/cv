import React from 'react'
import { Grid } from 'theme-ui'

export const Interests = ({ children }) => {
  return (
    <Grid
      as="article"
      columns={[3, '1fr 1fr 1fr']}
      sx={{
        display: 'grid',
        gridGap: 3,
      }}
    >
      {children}
    </Grid>
  )
}

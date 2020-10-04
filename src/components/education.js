import React from 'react'
import { Grid } from 'theme-ui'

export const Education = ({ children }) => {
  return (
    <>
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
    </>
  )
}

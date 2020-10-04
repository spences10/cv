import React from 'react'
import { Box, Grid, Heading, Link } from 'theme-ui'

export const Basics = ({
  name,
  label,
  img,
  email,
  phone,
  website,
}) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Heading>{name}</Heading>
      <Box
        as="p"
        sx={{
          fontSize: 2,
          fontWeight: 'bold',
        }}
      >
        {label}
      </Box>
      <p>{img}</p>
      <Grid gap={2} columns={[3, '1fr 1fr 1fr']}>
        <Link href={`mailto:${email}`}>{email}</Link>
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={website}>{website}</Link>
      </Grid>
    </Box>
  )
}

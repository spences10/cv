import React, { useState } from 'react'
import { Box, Button, Heading } from 'theme-ui'
import Long from '../copy/index-long'
import Medium from '../copy/index-medium'
import Short from '../copy/index-short'

export default () => {
  const [copySize, copySizeSet] = useState('0')

  const copy = {
    '0': 'Short',
    '1': 'Medium',
    '2': 'Long',
  }

  return (
    <Box as="main">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => copySizeSet('0')}>Short</Button>
        <Button onClick={() => copySizeSet('1')}>Medium</Button>
        <Button onClick={() => copySizeSet('2')}>Long</Button>
      </Box>
      <Heading as="h1" variant="styles.h1">
        {copy[copySize]}
      </Heading>

      <Box
        as="article"
        sx={{ display: copySize === '0' ? `block` : `none` }}
      >
        <Short />
      </Box>
      <Box
        as="article"
        sx={{ display: copySize === '1' ? `block` : `none` }}
      >
        <Medium />
      </Box>
      <Box
        as="article"
        sx={{ display: copySize === '2' ? `block` : `none` }}
      >
        <Long />
      </Box>
    </Box>
  )
}

import React, { useState } from 'react'
import { Slider } from '../components'
import Long from '../copy/long'
import Medium from '../copy/medium'
import Short from '../copy/short'

export default () => {
  const [copySize, copySizeSet] = useState(0)

  return (
    <>
      <Slider copySizeSet={copySizeSet} />
      <Short />
      <Medium />
      <Long />
      <h1>{copySize}</h1>
    </>
  )
}

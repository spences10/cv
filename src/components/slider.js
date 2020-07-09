import React from 'react'
import { Slider } from 'theme-ui'

export const MrSlider = ({ copySizeSet }) => {
  const handleChange = e => {
    const { value } = e.target

    copySizeSet(value)
  }

  return (
    <>
      <Slider min={0} max={2} onChange={e => handleChange(e)} />
    </>
  )
}

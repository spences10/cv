import React, { useState } from 'react'

export const Slider = ({ copySizeSet }) => {
  const [sliderValue, sliderValueSet] = useState(0)

  const handleChange = e => {
    const { value } = e.target
    sliderValueSet(value)
    copySizeSet(value)
  }

  return (
    <>
      <input
        type="range"
        min={0}
        max={2}
        value={sliderValue}
        onChange={e => handleChange(e)}
      />
    </>
  )
}

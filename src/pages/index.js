import React, { useState } from 'react'
import styled from 'styled-components'
import { Slider } from '../components'
import Long from '../copy/index-long'
import Medium from '../copy/index-medium'
import Short from '../copy/index-short'

const Wrapper = styled.main``

const ShortWrapper = styled.article`
  display: ${({ visible }) => visible};
`
const MediumWrapper = styled.article`
  display: ${({ visible }) => visible};
`
const LongWrapper = styled.article`
  display: ${({ visible }) => visible};
`

export default () => {
  const [copySize, copySizeSet] = useState(`0`)

  const copy = {
    '0': 'Short',
    '1': 'Medium',
    '2': 'Long',
  }

  return (
    <Wrapper>
      <Slider copySizeSet={copySizeSet} />
      <h1>{copy[copySize]}</h1>

      <ShortWrapper visible={copySize === '0' ? `block` : `none`}>
        <Short />
      </ShortWrapper>
      <MediumWrapper visible={copySize === '1' ? `block` : `none`}>
        <Medium />
      </MediumWrapper>
      <LongWrapper visible={copySize === '2' ? `block` : `none`}>
        <Long />
      </LongWrapper>
    </Wrapper>
  )
}

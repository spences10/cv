import React from 'react'
import { RootWrap } from './src/root-wrap'

export const wrapPageElement = ({ element }) => {
  return <RootWrap>{element}</RootWrap>
}

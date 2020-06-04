import { styled } from 'linaria/react'
import React from 'react'

const PageStyle = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1rem;
  word-break: break-word;
`

export const Layout = ({ children }) => {
  return <PageStyle>{children}</PageStyle>
}

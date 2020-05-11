import React from 'react'
import styled from 'styled-components'

const PageStyle = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1.25rem;
`

export const Layout = ({ children }) => {
  return <PageStyle>{children}</PageStyle>
}

import { formatDistance, toDate } from 'date-fns'
import { styled } from 'linaria/react'
import React from 'react'

const StyledDate = styled.span``

export const DateDistance = ({ from, to }) => {
  const dateFrom = toDate(new Date(from))
  const dateTo = toDate(
    new Date(to === undefined ? new Date(Date.now()) : to)
  )

  const distance = formatDistance(dateTo, dateFrom)

  return <StyledDate>{distance}</StyledDate>
}

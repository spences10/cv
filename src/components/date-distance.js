import { formatDistance, toDate } from 'date-fns'
import React from 'react'
import { Box } from 'theme-ui'

export const DateDistance = ({ from, to }) => {
  const dateFrom = toDate(new Date(from))
  const dateTo = toDate(
    new Date(to === undefined ? new Date(Date.now()) : to)
  )

  const distance = formatDistance(dateTo, dateFrom)

  return <Box as="span">{distance}</Box>
}

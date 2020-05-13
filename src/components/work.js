import { differenceInMonths, format, isValid } from 'date-fns'
import React from 'react'

export const WorkHeader = ({ company, position, start, end }) => {
  const getWorkDates = () => {
    const startDate = format(new Date(start), 'MMM yyyy')
    const endDate = () => {
      if (isValid(new Date(end))) {
        return format(new Date(end), 'MMM yyyy')
      } else {
        return 'Present'
      }
    }

    const time = differenceInMonths(
      end ? new Date(end) : new Date(),
      new Date(start)
    )

    const years = (time / 12) | 0
    const months = (time % 12) + 1 // JS months start at 0 🤦‍♂
    const timeThere =
      years > 0
        ? `${years > 1 ? `${years}yrs` : `${years}yr`} ${
            months > 1 ? `${months}mos` : `${months}mo`
          }`
        : `${months > 1 ? `${months}mos` : `${months}mo`}`

    return `${startDate} - ${endDate()} (${timeThere})`
  }

  return (
    <>
      <p>{position}</p>
      <p>{company}</p>
      <p>{getWorkDates()}</p>
    </>
  )
}

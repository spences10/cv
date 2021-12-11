<script>
  import { format, intervalToDuration, isValid } from 'date-fns'

  export let position, company, startDate, endDate

  const formatDates = (startDate, endDate) => {
    const formattedStart = format(new Date(startDate), 'MMM yyyy')
    const formattedEndDate = () => {
      if (isValid(new Date(endDate))) {
        return format(new Date(endDate), 'MMM yyyy')
      } else {
        return 'Present'
      }
    }
    const intervalEndDate = endDate === '' ? new Date() : endDate
    const { years, months } = intervalToDuration({
      start: new Date(startDate),
      end: new Date(intervalEndDate),
    })
    const yearsAndMonths = () => {
      const intervalYears = years ? `${years}yrs` : ''
      const intervalMonths = months ? `${months + 1}mos` : '' // Months is zero based!
      if (intervalYears === '' && intervalMonths !== '') {
        return `(${intervalMonths})`
      }
      if (intervalYears !== '' && intervalMonths === '') {
        return `(${intervalYears})`
      }
      if (intervalYears !== '' && intervalMonths !== '') {
        return `(${intervalYears} ${intervalMonths})`
      }
      return ``
    }
    return `${formattedStart} - ${formattedEndDate()} ${yearsAndMonths()}`
  }
</script>

<div
  class="flex flex-col md:flex-row print:flex-row justify-between md:items-end mb-2 print:mb-0"
>
  <h2
    class="text-4xl print:text-2xl font-bold tracking-wide text-primary print:text-black"
  >
    {position}
  </h2>
  <span
    class="text-2xl print:text-xl font-bold text-accent-focus print:text-black"
    >{company}</span
  >
</div>

<span
  class="text-accent font-bold print:font-medium print:text-black print:text-xs"
  >{formatDates(startDate, endDate)}</span
>
<div class="mb-8 print:mb-2" />

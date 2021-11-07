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

<div class="flex flex-col sm:flex-row justify-between items-end mb-2">
  <h2 class="text-4xl font-bold tracking-wide text-primary">
    {position}
  </h2>
  <span class="text-2xl font-bold text-accent-focus">{company}</span>
</div>

<span class="text-accent">{formatDates(startDate, endDate)}</span>
<div class="mb-8" />

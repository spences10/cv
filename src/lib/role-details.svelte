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
      const intervalMonths = months ? `${months}mos` : ''
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

<h2 class="position">{position}</h2>
<p class="company">{company}</p>
<span class="dates">{formatDates(startDate, endDate)}</span>

<style>
  .position {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .company {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .dates {
    color: rgb(88 99 104);
  }
</style>

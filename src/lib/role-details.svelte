<script>
  import { format, isValid } from 'date-fns'

  export let position
  export let company
  export let startDate
  export let endDate

  const calcDates = (startDate, endDate) => {
    const formattedStart = format(new Date(startDate), 'MMM yyyy')
    const formattedEndDate = () => {
      if (isValid(new Date(endDate))) {
        return format(new Date(endDate), 'MMM yyyy')
      } else {
        return 'Present'
      }
    }
    return `${formattedStart} - ${formattedEndDate()}`
  }
</script>

<p class="position">{position}</p>
<p class="company">{company}</p>
<span class="dates">{calcDates(startDate, endDate)}</span>

<style>
  .position {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
</style>

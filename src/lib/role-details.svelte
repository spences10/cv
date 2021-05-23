<script>
  export let position
  export let company
  export let startDate
  export let endDate

  const calcDates = (startDate, endDate) => {
    return `${startDate} - ${endDate === '' ? 'Present' : endDate}`
  }
</script>

<p class="position">{position}</p>
<p class="company">{company}</p>
<p class="dates">{calcDates(startDate, endDate)}</p>

<style>
  .position {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
</style>

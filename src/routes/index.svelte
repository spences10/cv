<script context="module">
  export const prerender = true
</script>

<script>
  import Basics from '../copy/basics.md'
  import Interests from '../copy/interests.md'
  import Work from '../copy/work.md'
</script>

<svelte:head>
  <title>CV</title>
  <meta name="monetization" content="$ilp.uphold.com/bzPBWkMBzLmN" />
</svelte:head>

<Basics />
<Work />
<Interests />

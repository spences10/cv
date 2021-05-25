<script>
  import Basics from '../copy/basics.md'
  import Education from '../copy/education.md'
  import Interests from '../copy/interests.md'
  import References from '../copy/references.md'
  import Skills from '../copy/skills.md'
  import Work from '../copy/work.md'
</script>

<svelte:head>
  <title>CV</title>

  <link href="./global.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins"
    rel="stylesheet"
  />
  <meta name="monetization" content="$ilp.uphold.com/bzPBWkMBzLmN" />
</svelte:head>

<Basics />
<Skills />
<Work />
<Interests />
<Education />
<References />

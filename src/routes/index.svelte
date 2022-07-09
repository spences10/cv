<script context="module">
  export const prerender = true
</script>

<script>
  import { authorName, siteName } from '@lib/config'
  import { Head } from 'svead'
  import Basics from '../copy/basics.md'
  import Interests from '../copy/interests.md'
  import Work from '../copy/work.md'
</script>

<Head
  title={`Web Development Related Experience · ${siteName}`}
  description={`Relevant web development experience for JavaScript developer ${authorName}`}
/>

<Basics />
<Work />
<Interests />

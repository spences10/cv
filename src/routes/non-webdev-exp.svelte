<script context="module">
  export const prerender = true
</script>

<script>
  import { authorName, siteName } from '@lib/config'
  import { Head } from 'svead'
  import Work from '../copy/non-webdev-exp.md'
</script>

<Head
  title={`Non Web Development Related Experience · ${siteName}`}
  description={`Relevant past experience for ${authorName}`}
/>

<Work />

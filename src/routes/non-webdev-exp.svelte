<script context="module">
  export const prerender = true
</script>

<script>
  import Head from '@components/head.svelte'
  import { authorName, siteName } from '@lib/config'
  import Work from '../copy/non-webdev-exp.md'
</script>

<Head
  title={`Non Web Development Related Experience · ${siteName}`}
  description={`Relevant web development experience for ${authorName}`}
/>

<Work />

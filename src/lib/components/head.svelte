<script>
  import { authorName, siteName, siteUrl } from '@lib/config'

  export let title, description
</script>

<svelte:head>
  <link rel="canonical" href={siteUrl} />
  <!-- Meta Tags Generated via https://heymeta.com -->

  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content={authorName} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={siteName} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content="/profile-pic.png" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={siteUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={siteName} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/profile-pic.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={siteUrl} />
  <meta property="twitter:url" content={siteUrl} />
  <meta name="twitter:title" content={siteName} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/profile-pic.png" />

  <!-- Monetisation -->
  <meta name="monetization" content="$ilp.uphold.com/bzPBWkMBzLmN" />
</svelte:head>

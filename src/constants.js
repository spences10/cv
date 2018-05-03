// SITE META ==================
const nameContent = 'Scott Spence - portfolio'
const descriptionContent =
  'Portfolio site of Scott Spence - web developer'
const keywordsContent = 'portfolio, web developer, javascript'
const imageLink =
  'https://scottspence.me/favicons/firefox_app_512x512.png'

export const siteMeta = [
  // Google / Search Engine Tags
  {
    name: 'description',
    content: descriptionContent
  },
  {
    name: 'keywords',
    content: keywordsContent
  },
  {
    name: 'image',
    content: imageLink
  },
  // facebook
  { name: 'og:url', content: 'https://scottspence.me' },
  { name: 'og:type', content: 'website' },
  { name: 'og:title', content: nameContent },
  {
    name: 'og:description',
    content: descriptionContent
  },
  {
    name: 'og:image',
    content: imageLink
  },
  // twitter
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: nameContent
  },
  {
    name: 'twitter:description',
    content: descriptionContent
  },
  {
    name: 'twitter:image',
    content: imageLink
  }
]
// /SITE META ==================

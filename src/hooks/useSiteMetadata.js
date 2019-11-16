import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            firstName
            lastName
            siteUrl
            titleTemplate
            description
            twitterUsername
            facebookAppID
            developerName
            developerUrl
            descriptionContent
            keywordsContent
            imageLink
            siteLanguage
            siteLocale
          }
        }
      }
    `
  )
  return site.siteMetadata
}

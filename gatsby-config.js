const siteMetadata = {
  title: `Scott Spence - CV`,
  firstName: `Scott`,
  lastName: `Spence`,
  siteUrl: `https://cv.scottspence.me`,
  titleTemplate: `%s | cv.scottspence.me`,
  description: `Scott Spence, JavaScript, React and Gatsby JS developer. He/Him`,
  twitterUsername: `@spences10`,
  facebookAppID: ``,
  faviconPng: `./static/favicon.png`,
  backgroundColour: `#663399`, // this is for favicon and manifest
  themeColour: `#755f9f`, // this is for favicon and manifest
  nameContent: `Scott Spence - cv/resume`,
  developerName: `Scott Spence`,
  developerUrl: `https.scottspence.me`,
  descriptionContent: `Scott Spence - web developer`,
  keywordsContent: `web developer, javascript, react, cv/resmue, information`,
  imageLink: `/favicon.png`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // add to netlify Build environment variables
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scott Spence - CV`,
        short_name: `Scott Spence - CV`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `standalone`,
        icon: siteMetadata.faviconPng
      }
    },
    `gatsby-plugin-offline`
  ]
}

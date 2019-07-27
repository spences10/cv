const siteMetadata = {
  title: `Scott Spence - CV`,
  firstName: `Scott`,
  lastName: `Spence`,
  siteUrl: `https://cv.scottspence.me`,
  titleTemplate: `%s | cv.scottspence.me`,
  description: `Scott Spence, Father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him`,
  twitterUsername: `@ScottDevTweets`,
  facebookAppID: ``,
  faviconPng: `./src/images/favicon.png`,
  backgroundColour: `#663399`, // this is for favicon and manifest
  themeColour: `#755f9f`, // this is for favicon and manifest
  nameContent: `Scott Spence - cv/resume`,
  developerName: `Scott Spence`,
  developerUrl: `https.scottspence.me`,
  descriptionContent: `Scott Spence - web developer`,
  keywordsContent: `web developer, javascript, react, cv/resmue, information`,
  imageLink: `https://scottspence.me/icons/icon-512x512.png`,
  siteLanguage: `en-GB`
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: siteMetadata.faviconPng,
        // WebApp Manifest Configuration
        appName: siteMetadata.title,
        appDescription: siteMetadata.descriptionContent,
        developerName: siteMetadata.developerName,
        developerURL: siteMetadata.developerUrl,
        dir: `auto`,
        lang: siteMetadata.siteLanguage,
        background: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `standalone`,
        orientation: `any`,
        start_url: `/?homescreen=1`,
        version: `1.0`,

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // add to netlify Build environment variables
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false
      }
    }
  ]
}

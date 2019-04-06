import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from './siteMetadata'

const SEO = ({
  article,
  title,
  description,
  image,
  keywords,
  pathname
}) => {
  const {
    description: defaultDescription,
    imageLink: defaultImage,
    siteLanguage,
    siteUrl,
    title: defaultTitle,
    titleTemplate,
    twitterUsername
  } = useSiteMetadata()

  // assign default values if needed
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <html lang={siteLanguage} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(', ')} />
      ) : null}
    </Helmet>
  )
}

export default SEO

SEO.defaultProps = {
  siteLanguage: 'en',
  keywords: []
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
  pathname: PropTypes.string
}

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const ImagePath = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query ABOUT_IMAGE {
        placeholderImage: file(
          relativePath: { eq: "profileImage.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return placeholderImage.childImageSharp
}

export const AboutImage = () => {
  const { fluid } = ImagePath()
  return <Img style={{ borderRadius: '50%' }} fluid={fluid} />
}

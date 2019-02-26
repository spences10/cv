import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { cvDataCv } = useStaticQuery(
    graphql`
      query SITE_CV_DATA {
        cvDataCv {
          basics {
            name
            label
            picture
            email
            phone
            website
            summary
            location {
              address
              postalCode
              city
              countryCode
              region
            }
            profiles {
              network
              username
              url
            }
          }
        }
      }
    `
  )
  return cvDataCv
}

export default useSiteMetadata

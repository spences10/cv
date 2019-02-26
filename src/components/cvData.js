import { graphql, useStaticQuery } from 'gatsby'

const useCvData = () => {
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
          awards {
            title
            date
            awarder
            summary
          }
          education {
            institution
            area
            studyType
            startDate
            endDate
            gpa
          }
          interests {
            name
            keywords
          }
          languages {
            language
            fluency
          }
          publications {
            name
            publisher
            releaseDate
            website
            summary
          }
          references {
            name
            reference
          }
        }
      }
    `
  )
  return cvDataCv
}

export default useCvData

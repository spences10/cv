import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../util/helpers'
import {
  ItemWrapper as IW,
  StyledDiv as SD,
  WeightAndColour as WC
} from './shared'

const LanguagesWrapper = styled(IW)`
  grid-area: la;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const LanguagesTitle = styled(WC)`
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const LanguagesItemWrapper = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'ti ti ti fl fl fl';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const LanguagesItemTitle = styled.span`
  grid-area: ti;
`

const LanguagesItemFluency = styled.span`
  grid-area: fl;
`

const Languages = ({ data }) => {
  const { languages } = data.cvDataCv
  // return <Dump data={data} />
  const getLanguages = languages.map((item, index) => {
    return (
      <LanguagesItemWrapper key={index}>
        <LanguagesItemTitle>{item.language}</LanguagesItemTitle>
        <LanguagesItemFluency>{item.fluency}</LanguagesItemFluency>
      </LanguagesItemWrapper>
    )
  })

  return (
    <LanguagesWrapper>
      <ContentWrapper>
        <LanguagesTitle>languages</LanguagesTitle>
        {getLanguages}
      </ContentWrapper>
    </LanguagesWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Languages {
        cvDataCv {
          languages {
            language
            fluency
          }
        }
      }
    `}
    render={data => <Languages data={data} {...props} />}
  />
)

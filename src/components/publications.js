import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

import { Dump } from '../util/helpers'

import {
  ItemWrapper as IW,
  WeightAndColour as WC,
  StyledDiv as SD,
  ItemHeader as IH,
  StyledHyperLink as SHL
} from './shared'

const PublicationsWrapper = styled(IW)`
  grid-area: pu;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const PublicationsTitle = styled(WC)`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const PublicationsItemWrapper = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'ti ti ti ti date date'
    'ps ps ps ps ps   ps  '
    'sh sh sh sh sh   sh  '
    'su su su su su   su  ';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const PublicationName = styled.span`
  grid-area: ti;
  font-weight: 900;
`

const Publisher = styled.span`
  grid-area: ps;
`

const PublicationReleaseDate = styled.span`
  grid-area: date;
`

const WebsiteLink = styled(SHL)`
  grid-area: ti;
`

const PublicationItemHeader = styled(IH)`
  grid-area: sh;
`

const PublicationItemSummary = styled.span`
  grid-area: su;
  padding-top: 0.5rem;
`

const Publications = ({ data }) => {
  const { publications } = data.cvDataCv

  const getPublications = publications.map((item, index) => {
    const publicationDate = format(item.releaseDate, 'MMM yyyy')
    return (
      <PublicationsItemWrapper key={index}>
        <WebsiteLink
          href={item.website}
          target="_blank"
          rel="noopener">
          <PublicationName>{item.name}</PublicationName>
        </WebsiteLink>
        <Publisher>{item.publisher}</Publisher>
        <PublicationReleaseDate>
          {publicationDate}
        </PublicationReleaseDate>
        <PublicationItemHeader>summary</PublicationItemHeader>
        <PublicationItemSummary>
          {item.summary}
        </PublicationItemSummary>
      </PublicationsItemWrapper>
    )
  })

  return (
    <React.Fragment>
      {publications[0].name.length === 0 ? null : (
        <PublicationsWrapper>
          {/* <Dump a={publications} /> */}
          <ContentWrapper>
            <PublicationsTitle>Publications</PublicationsTitle>
            {getPublications}
          </ContentWrapper>
        </PublicationsWrapper>
      )}
    </React.Fragment>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Publications {
        cvDataCv {
          publications {
            name
            publisher
            releaseDate
            website
            summary
          }
        }
      }
    `}
    render={data => <Publications data={data} {...props} />}
  />
)

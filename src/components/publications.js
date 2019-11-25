import { format } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import useCvData from './cvData'
import {
  ItemHeader as IH,
  ItemWrapper as IW,
  StyledDiv as SD,
  StyledHyperLink as SHL,
  WeightAndColour as WC
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

export const Publications = () => {
  const { publications } = useCvData()

  const getPublications = publications.map((item, index) => {
    const publicationDate = format(
      new Date(item.releaseDate),
      'MMM yyyy'
    )
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

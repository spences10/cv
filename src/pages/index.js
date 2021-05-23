import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { About } from '../components/about'
import { Awards } from '../components/awards'
import { Education } from '../components/education'
import { Interests } from '../components/interests'
import { Languages } from '../components/languages'
import { Layout } from '../components/layout'
import { Publications } from '../components/publications'
import { References } from '../components/references'
import { Skills } from '../components/skills'
import { ThemeSelect } from '../components/themeSelect'
import { Volunteer } from '../components/volunteer'
import { Work } from '../components/work'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const ThemeSelectWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  position: fixed;
  bottom: 0;
  right: 0;
`

export default () => {
  const {
    title,
    description,
    siteUrl,
    imageLink,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title={`cv`}
        titleTemplate={title}
        description={description}
        image={`${siteUrl}${imageLink}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <About />
      <Skills />
      <Work />
      <Volunteer />
      <Education />
      <Awards />
      <Publications />
      <Languages />
      <Interests />
      <References />
      <ThemeSelectWrapper>
        <ThemeSelect />
      </ThemeSelectWrapper>
    </Layout>
  )
}

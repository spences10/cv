import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme1, theme2 } from '../theme/globalStyle'

import About from './About'
import Work from './Work'
import Skills from './Skills'
import Education from './Education'
import ThemeSelect from './ThemeSelect'

import { fetchCvData } from '../util/helpers'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . a a a a . . '
    '. . w w w w . . '
    '. . s s s s . . '
    '. . e e e e . . ';
`

class App extends React.Component {
  state = {
    cv: {
      awards: [],
      basics: {},
      education: [],
      interests: [],
      languages: [],
      publications: [],
      references: [],
      skills: [],
      volunteer: [],
      work: []
    },
    apiUrl: 'https://cvjson.now.sh/',
    theme: theme1
  }

  componentDidMount() {
    fetchCvData(this.state.apiUrl).then(result => {
      this.setState({ cv: result.data })
    })
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }

  render() {
    const { basics, education, skills, work } = this.state.cv

    return (
      <ThemeProvider theme={this.state.theme}>
        <PageContainer>
          <About aboutData={basics} />
          <Work workData={work} />
          <Skills skillsData={skills} />
          <Education educationData={education} />
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </PageContainer>
      </ThemeProvider>
    )
  }
}

export default App

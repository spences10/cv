import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import { theme } from './theme/globalStyle'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()

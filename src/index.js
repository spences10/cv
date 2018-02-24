import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import './theme/globalStyle'

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
)
registerServiceWorker()

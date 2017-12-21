import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import './theme/globalStyle'

const cv = require('./cv.json')

ReactDOM.render(
  <div>
    <App cvObj={cv} />
  </div>,
  document.getElementById('root')
)
registerServiceWorker()

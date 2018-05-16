import React from 'react'

import Dump from '../util/helpers'

const Dashboard = props => {
  return (
    <React.Fragment>
      <Dump props={props} />
      <p>jsx goes here</p>
    </React.Fragment>
  )
}

export default Dashboard

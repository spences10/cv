import React from 'react'

import { Dump } from '../util/helpers'

const Dashboard = props => {
  return (
    <React.Fragment>
      {Object.keys(props).map(key => {
        console.log(key)
      })}
      <Dump props={props} />
    </React.Fragment>
  )
}

export default Dashboard

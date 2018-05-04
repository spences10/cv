import axios from 'axios'
import React from 'react'

export async function fetchCvData(dataUrl) {
  return await axios.get(dataUrl)
}

/**
 * Thanks Wes
 * https://github.com/wesbos/dump
 */
export const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: '1px solid #efefef',
      padding: 10,
      background: 'white'
    }}>
    {Object.keys(props).map(prop => (
      <pre key={prop}>
        <strong style={{ color: 'white', background: 'red' }}>
          {prop} 💩
        </strong>
        {JSON.stringify(props[prop], '', ' ')}
      </pre>
    ))}
  </div>
)

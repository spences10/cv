const axios = require('axios')
const crypto = require('crypto')

const createNodeHelpers = require('gatsby-node-helpers').default

const { createNodeFactory } = createNodeHelpers()

const CV = createNodeFactory('CV')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const fetchCvData = () => axios.get('https://cvjson.now.sh/')
  // await for results
  const res = await fetchCvData()

  // Create your node object
  const cvNode = CV(res.data)

  // Create node with the gatsby createNode() API
  createNode(cvNode)

  return
}

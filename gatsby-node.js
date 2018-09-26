const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const fetchCvData = () => axios.get('https://cvjson.now.sh/')
  // await for results
  const res = await fetchCvData()

  // Create your node object
  const cvNode = {
    // Required fields
    id: '0',
    parent: '__SOURCE__',
    internal: {
      type: 'CV' // name of the graphQL query --> allCv {}
      // contentDigest will be added just after
      // but it is required
    },
    children: [],
    ...res.data
  }

  // Get content digest of node. (Required field)
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(cvNode))
    .digest('hex')
  // add it to userNode
  cvNode.internal.contentDigest = contentDigest

  // Create node with the gatsby createNode() API
  createNode(cvNode)

  return
}

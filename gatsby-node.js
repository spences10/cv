const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  // fetch raw data from the randomuser api
  const fetchCvData = () => axios.get(`https://cvjson.now.sh/`)
  // await for results
  const res = await fetchCvData()

  // map into these results and create nodes
  console.log('=====================')
  console.log(res.data)
  console.log('=====================')
  Object.keys(res.data).map((user, index) => {
    // Create your node object
    const cvNode = {
      // Required fields
      id: `${index}`,
      parent: `__SOURCE__`,
      internal: {
        type: `CV` // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: []
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(cvNode))
      .digest(`hex`)
    // add it to userNode
    cvNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(cvNode)
  })

  return
}

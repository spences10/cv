const axios = require('axios')
const createNodeHelpers = require('gatsby-node-helpers').default

const fetchUrl =
  'https://gist.githubusercontent.com/spences10/1920e5c8f91cd723fd25b90d41abaf8f/raw/a550b180121ad91968d4713c22b893df1b279855/cv.json'
// const fetchUrl =
//   'https://cvjson.now.sh/cv.json'

const { createNodeFactory } = createNodeHelpers({
  typePrefix: 'cvData'
})

const CV = createNodeFactory('CV')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const fetchCvData = () => axios.get(fetchUrl)

  // await for results
  const res = await fetchCvData()

  // Create your node object
  const cvNode = CV(res.data)

  // Create node with the gatsby createNode() API
  createNode(cvNode)

  return
}

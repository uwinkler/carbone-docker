const axios = require('axios')
const fs = require('fs')

// Your GitHub repository information
const owner = 'uwinkler'
const repo = 'arztrechnung'

// Your GitHub Personal Access Token (Generate one in your GitHub settings)
const token = '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'

// Define the issue data
const issueData = {
  title: 'Your Issue Title',
  body: 'Description of your issue goes here.'
}

const headers = {
  headers: {
    Authorization: `token ${token}`
  }
}

axios
  .put(
    `https://api.github.com/repos/${owner}/${repo}/contents/invoice.pdf`,
    {
      message: 'Add file',
      content: fs.readFileSync('./invoice.pdf').toString('base64')
    },
    headers
  )
  .then((fileResponse) => {
    console.log('File attached:', fileResponse.data)
  })
  .catch((fileError) => {
    console.error('Error attaching file:', fileError.response.data)
  })

// Create the issue
// axios
//   .post(
//     `https://api.github.com/repos/${owner}/${repo}/issues`,
//     issueData,
//     headers
//   )
//   .then((response) => {
//     console.log('Issue created:', response.data)

//     const fileContent = fs.readFileSync('invoice.pdf') // Replace with the path to your file
//   })
//   .catch((error) => {
//     console.error('Error creating issue:', error)
//   })

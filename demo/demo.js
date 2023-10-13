const axios = require('axios')
const fs = require('fs')

const URL = 'http://localhost:3030/render' // Replace with your actual URL
const OUTPUT_FILE = 'invoice.pdf'
const TEMPLATE_FILE = 'template.odt'
const DATA_FILE = 'testdata.min.json'

const DATA = fs.readFileSync(DATA_FILE, 'utf8')

const options = {
  auth: {
    username: 'demo',
    password: 'demo'
  },
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

const formData = new FormData()
formData.append('template', fs.readFileSync(TEMPLATE_FILE), {
  knownLength: fs.statSync(TEMPLATE_FILE).size,
  contentType: 'application/vnd.oasis.opendocument.text'
})

formData.append('data', DATA)
formData.append('options', JSON.stringify({ convertTo: 'pdf' }))
formData.append(
  'email',
  JSON.stringify({
    to: ['tom@example.com', 'jerry@example.com'],
    subject: 'Your Report is Ready!',
    text: 'We prepared a document for you.\n\nBest Regards,\nThe Kodira Automatons.'
  })
)
formData.append('formatters', JSON.stringify({}))

axios
  .post(URL, formData, options)
  .then((response) => {
    fs.writeFileSync(OUTPUT_FILE, response.data, 'binary')
  })
  .catch((error) => {
    console.error('Error:', error)
  })

// contentful.js v4.x.x
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

client.getEntries({
  include: 2
})
  .then((response) => console.log(response.items))
  .catch(console.error)

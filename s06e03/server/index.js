const cors = require('cors')
const express = require('express')

const router = require('./routes')

const server = express()
const port = 3000

server.use(cors())
server.use('/api', router)

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})

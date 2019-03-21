const path = require('path')
const express = require('express')
const server = express()

const port = 3000
server.listen(port, () => {
  console.log('Listening on port', port)
})

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/kahikatea', (req, res) => {
  res.send('<h1 style="color: red">Kahikatea is epic!!</h1>')
})

server.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'))
})

server.get('/awesome/:name', (req, res) => {
  console.log(req.params)
  res.send('Hi ' + req.params.name)
})

server.get('/hello', (req, res) => {
  console.log(req.query)
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
})

// http://localhost:3000/hello?firstName=Charlie&lastName=Bluth

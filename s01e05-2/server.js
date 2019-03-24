const express = require('express')

const server = express()
const names = ['frank']

// create static folder
server.use(express.static('public'))

// tell express how to parse posted data
server.use(express.urlencoded({ extended: false }))

// routes
server.get('/', (req, res) => {
  const html = getNamesHtml(names)
  res.send(html)
})

server.post('/add', (req, res) => {
  const name = req.body.newName
  names.push(name)
  res.redirect('/')
})

function getNamesHtml (namelist) {
  let html = '<h1>Names</h1><ul>'
  namelist.forEach(name => {
    html += `<li>${name}</li>`
  })
  html += '</ul><a href="/add.html">Add new name</a>'
  return html
}

module.exports = server

const express = require('express')
const hbs = require('express-handlebars')

// Configuration
const server = express()
server.engine('hbs', hbs({ extname: '.hbs' }))
server.set('view engine', 'hbs')

// Routes
server.get('/', (req, res) => {
  res.render('home', require('./data'))
})

server.get('/greet', (req, res) => {
  const data = {
    name: 'Emily'
  }
  res.render('greeting', data)
})

module.exports = server

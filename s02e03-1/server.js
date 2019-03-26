// Require npm modules
const server = require('express')()
const hbs = require('express-handlebars')

// Line 2 is shorthand for the following:
// const express = require('express')
// const server = express()

// Routers
const homeRouter = require('./routes/home')
const portfolioRouter = require('./routes/portfolio')

// Export server
module.exports = server

// Handlebars configuration
const hbsConfig = {
  extname: '.hbs',
  defaultLayout: 'main'
}
server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

// Routing
server.use('/portfolio', portfolioRouter)
server.use('/', homeRouter)

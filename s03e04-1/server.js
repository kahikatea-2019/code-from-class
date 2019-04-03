const express = require('express')
const hbs = require('express-handlebars')

const homeRoutes = require('./routes/home')
const studentsRoutes = require('./routes/students')

const server = express()

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

server.use('/', homeRoutes)
server.use('/students', studentsRoutes)

module.exports = server

const express = require('express')
const router = express.Router()

const colors = require('../data/colors')

module.exports = router

// GET /
router.get('/', (req, res) =>
  res.send('Hello World!')
)

// GET /colors
router.get('/colors', (req, res) => {
  const data = {
    title: 'Colours of the rainbow',
    colors: colors
  }
  res.render('home', data)
})

// GET /eda
router.get('/eda', (req, res) => {
  res.send('<h1>EDA rocks!</h1>')
})

// GET /potatoes REDIRECT to /potatoes-suck
router.get('/potatoes', (req, res) => {
  res.redirect('/potatoes-suck')
})

// GET /potatoes-suck
router.get('/potatoes-suck', (req, res) => {
  res.send('<h1>Potatoes are lame</h1>')
})

// GET /:name
router.get('/:name', (req, res) => {
  const name = req.params.name
  res.send(`Hello ${name}!`)
})

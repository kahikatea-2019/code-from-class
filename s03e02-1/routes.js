const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => res.render('home'))

router.get('/users', (req, res) => {
  db.getUsers()
    .then(displayUsers)
    .catch(displayError)

  function displayUsers (users) {
    res.render('users', { users })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

router.get('/posts', (req, res) => {
  db.getPosts()
    .then(posts => res.render('posts', { posts }))
    .catch(err => res.status(500).send(err.message))
})

router.get('/post/:id', (req, res) => {
  const id = req.params.id
  db.getPostById(id)
    .then(post => res.render('post', post))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router

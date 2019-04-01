const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => res.render('home'))

router.get('/users', (req, res) => {
  // This example uses named functions
  // for each step in the promise chain
  db.getUsers()
    .then(displayUsers)
    .catch(displayError)

  function displayUsers (users) {
    res.render('users', { users })
  }

  function displayError (res, err) {
    res.status(500).send(err.message)
  }
})

router.get('/posts', (req, res) => {
  // This example uses in-line anonymous functions
  // for each step in the promise chain
  db.getPosts()
    .then(posts => res.render('posts', { posts }))
    .catch(err => res.status(500).send(err.message))
})

router.get('/post/:id', (req, res) => {
  const id = req.params.id

  // This example passes the res object
  // to the global displayError function,
  // good for code reusability
  db.getPostById(id)
    .then(post => res.render('post', post))
    .catch(err => displayError(res, err))
})

// Global function (called on line 40)
function displayError (res, err) {
  res.status(500).send(err.message)
}

module.exports = router

const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => res.render('home'))

router.get('/users', (req, res) => {
  db.getUsers()
    .then(users => res.render('users', { users }))
    .catch(err => displayError(res, err))
})

router.get('/posts', (req, res) => {
  db.getPosts()
    .then(posts => res.render('posts', { posts }))
    .catch(err => displayError(res, err))
})

router.get('/post/:id', (req, res) => {
  const id = req.params.id
  db.getPostById(id)
    .then(postArr => {
      return {
        subject: postArr[0].subject,
        body: postArr[0].body,
        username: postArr[0].username,
        categories: postArr.map(item => item.category)
      }
    })
    .then(post => res.render('post', post))
    .catch(err => displayError(res, err))
})

// Global function
function displayError (res, err) {
  res.status(500).send(err.message)
}

module.exports = router

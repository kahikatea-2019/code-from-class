const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getUsers,
  getPosts,
  getPostById
}

function getUsers () {
  return db('users')
    .select('username', 'email')
}

function getPosts () {
  return db('posts')
    .select('id', 'subject')
}

function getPostById (id) {
  return db('posts')
    .join('users', 'posts.user_id', 'users.id')
    // .join('comments', 'posts.id', 'comments.post_id')
    .where('posts.id', id)
    .first()
    .select()
}

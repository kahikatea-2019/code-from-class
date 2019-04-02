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
  return db('posts_categories')
    .join('posts', 'posts.id', 'posts_categories.post_id')
    .join('categories', 'categories.id', 'posts_categories.category_id')
    .join('users', 'posts.user_id', 'users.id')
    .where('posts.id', id)
    .select('posts.subject', 'posts.body',
      'users.username', 'categories.name as category')
}

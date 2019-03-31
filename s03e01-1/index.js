const knex = require('knex')

const config = require('./knexfile').development

const db = knex(config) // create DB connection

db('tasks')
  .select() // async
  .then(rows => {
    rows.forEach(row => {
      console.log(row.id, row.text)
    })
    db.destroy() // close connection - only for CLI apps
  })
  .catch(err => console.error(err))

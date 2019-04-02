exports.up = knex =>
  knex.schema.createTable('artists', table => {
    table.increments('id').primary()
    table.string('name')
  })

exports.down = knex => knex.schema.dropTable('artists')

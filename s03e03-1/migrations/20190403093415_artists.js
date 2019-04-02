exports.up = knex =>
  knex.schema.createTable('artists', table => {
    table.increments('id')
    table.string('name')
  })

exports.down = knex => knex.schema.dropTable('artists')

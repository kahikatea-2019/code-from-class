exports.up = knex =>
  knex.schema.createTable('albums', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('artist_id').references('artists.id')
  })

exports.down = knex => knex.schema.dropTable('albums')

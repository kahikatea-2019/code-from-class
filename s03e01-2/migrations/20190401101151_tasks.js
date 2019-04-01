exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', table => {
    table.integer('id')
    table.string('text')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}

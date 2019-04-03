exports.up = knex =>
  knex.schema.createTable('students', table => {
    table.increments('id').primary()
    table.string('student')
    table.string('username')
  })

exports.down = knex => knex.schema.dropTable('students')

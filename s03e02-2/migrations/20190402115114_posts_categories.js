exports.up = knex =>
  knex.schema.createTable('posts_categories', table => {
    table.increments('id')
    table.integer('post_id')
    table.integer('category_id')
  })

exports.down = knex => knex.schema.dropTable('posts_categories')

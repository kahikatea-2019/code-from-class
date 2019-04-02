exports.seed = knex =>
  knex('posts_categories')
    .del()
    .then(() =>
      knex('posts_categories').insert([
        { id: 1, post_id: 1, category_id: 2 },
        { id: 2, post_id: 2, category_id: 3 },
        { id: 3, post_id: 3, category_id: 1 },
        { id: 4, post_id: 4, category_id: 1 },
        { id: 5, post_id: 4, category_id: 2 }
      ])
    )

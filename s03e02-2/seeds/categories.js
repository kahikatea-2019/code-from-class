exports.seed = knex =>
  knex('categories')
    .del()
    .then(() =>
      knex('categories').insert([
        { id: 1, name: 'funny' },
        { id: 2, name: 'news' },
        { id: 3, name: 'code' }
      ])
    )

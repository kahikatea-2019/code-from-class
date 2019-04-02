exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(() => {
      // Inserts seed entries
      return knex('artists').insert([
        { id: 1, name: 'Whitney Houston' },
        { id: 2, name: 'Jeff Buckley' }
      ])
    })
}

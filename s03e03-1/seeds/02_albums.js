exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(() => {
      // Inserts seed entries
      return knex('albums').insert([
        { id: 1, name: 'Whitney', artist_id: 1 },
        { id: 2, name: 'I Look To You', artist_id: 1 },
        { id: 3, name: 'Grace', artist_id: 2 }
      ])
    })
}

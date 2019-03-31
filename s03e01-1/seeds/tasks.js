exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, text: 'do dishes' },
        { id: 2, text: 'do laundry' },
        { id: 3, text: 'write code' }
      ])
    })
}

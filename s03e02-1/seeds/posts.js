exports.seed = knex =>
  knex('posts')
    .del()
    .then(() =>
      knex('posts').insert([
        {
          id: 1,
          subject: 'Cheap flights to WLG',
          body: '$20 return, get on it!!',
          user_id: 1 },
        { id: 2,
          subject: 'Need help with SQLite3',
          body: 'How do I join two tables?',
          user_id: 3 },
        { id: 3,
          subject: 'EDA rulez!! Uni droolz',
          body: 'Learn to code like a real developer!',
          user_id: 1 }
      ]))

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(() => {
      // Inserts seed entries
      return knex('students').insert([
        {
          'student': 'alice',
          'username': 'alicedilemma'
        },
        {
          'student': 'amy',
          'username': 'Nanitali'
        },
        {
          'student': 'azaan',
          'username': 'MurdocAV'
        },
        {
          'student': 'bradley',
          'username': 'Bradleywh1'
        },
        {
          'student': 'dani',
          'username': 'Anandani11'
        },
        {
          'student': 'ete',
          'username': 'Eteroa123'
        },
        {
          'student': 'eve',
          'username': 'EveEden'
        },
        {
          'student': 'ihaka',
          'username': 'ihakapink'
        },
        {
          'student': 'john',
          'username': 'JTapsell'
        },
        {
          'student': 'matt',
          'username': 'mxbialostocki'
        },
        {
          'student': 'paul',
          'username': 'paul-renwick'
        },
        {
          'student': 'philipj',
          'username': 'PhilipJi1608'
        },
        {
          'student': 'philipl',
          'username': 'philip-lim'
        },
        {
          'student': 'raj',
          'username': 'raj-sharma1'
        },
        {
          'student': 'struan',
          'username': 'struanw'
        },
        {
          'student': 'xjana',
          'username': 'Xjana'
        }
      ])
    })
}

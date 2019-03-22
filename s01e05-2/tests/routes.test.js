const request = require('supertest')

const server = require('../server')

test('GET / returns Frank', () => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('frank')
    })
})

test('GET /add.html contains a form', () => {
  request(server)
    .get('/add.html')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('<form')
    })
})

test('POST /add redirects to /', () => {
  request(server)
    .post('/add')
    .send({ newName: 'jules' })
    .expect(302) // redirect
    .expect('location', '/') // where we were redirected to
    .end((err, res) => {
      expect(err).toBeNull()
    })
})

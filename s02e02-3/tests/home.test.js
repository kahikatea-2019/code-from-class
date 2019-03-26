const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('test harness is setup correctly', () => {
  expect(true).toBe(true)
})

test('isCool renders a <p>', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const pLength = $('body > p').length
      expect(pLength).toBe(1)
    })
})

test('lists 3 superheroes', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const liLength = $('ul li').length
      expect(liLength).toBe(3)
    })
})

test('returns a 404 for /foo', () => {
  request(server)
    .get('/foo')
    .expect(404)
    .end((err, res) => {
      expect(err).toBeNull()
    })
})

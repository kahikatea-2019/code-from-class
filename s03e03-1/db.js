const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAlbums,
  getAlbumsArtists
}

function getAlbums (db = connection) {
  return db('albums')
    .select()
}

function getAlbumsArtists (db = connection) {
  return db('albums')
    .join('artists', 'artists.id', 'albums.artist_id')
    .select('artists.name as artist', 'albums.name')
}

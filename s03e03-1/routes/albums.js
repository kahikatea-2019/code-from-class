const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAlbumsArtists()
    .then(albums => {
      console.log(albums)
      res.render('albums', { albums: albums })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

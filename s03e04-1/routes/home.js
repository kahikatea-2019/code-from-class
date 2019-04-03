const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.redirect('/students'))

module.exports = router

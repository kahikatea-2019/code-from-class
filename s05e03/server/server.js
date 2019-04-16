const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())

server.get('/gameOfThronesAPI', (req, res) => {
    const url = `https://anapioficeandfire.com/api/characters/583`

    return request.get(url)
        .then(resp => {
            res.send(resp.body)
            return resp.body
        })
})

module.exports = server

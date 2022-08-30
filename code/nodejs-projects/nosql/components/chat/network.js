const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.post('/', function(req, res) {
    controller.addChat( req.body )
        .then((data) => response.success(req, res, data, 200))
        .catch((data) => response.error(req, res, data, 500))
})

module.exports = route
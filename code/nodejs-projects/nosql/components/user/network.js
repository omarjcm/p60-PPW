const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.post('/', function(req, res) {
    controller.addUser(req.body)
        .then( (dato) => response.success(req, res, dato, 200) )
        .catch( (dato) => response.error(req, res, dato, 500) )
})

route.get('/', function(req, res){
    const filterUsers = req.body || null
    controller.getUsers(filterUsers)
        .then( (dato) => response.success(req, res, dato, 200) )
        .catch( (dato) => response.error(req, res, dato, 500) )
})

route.patch('/', function(req, res) {
    controller.updateUser( req.body )
        .then( (dato) => response.success(req, res, dato, 200) )
        .catch( (dato) => response.error(req, res, dato, 500) )
})

route.delete('/', function(req, res) {
    controller.deleteUser( req.body )
        .then( (dato) => response.success(req, res, dato, 200) )
        .catch( (dato) => response.error(req, res, dato, 500) )
})

module.exports = route
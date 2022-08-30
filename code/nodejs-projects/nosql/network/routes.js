const express = require('express')

const user = require('../components/user/network')
const chat = require('../components/chat/network')
//const file = require('../components/file/network')

const routes = function(server) {
    server.use('/user', user)
    server.use('/chat', chat)
//    server.use('/file', file)
}

module.exports = routes
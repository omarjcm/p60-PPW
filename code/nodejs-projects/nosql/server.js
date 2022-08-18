const express = require('express')
const body_parser = require('body-parser')

const config = require('./config')
const routes = require('./network/routes')
const bd = require('./bd')

var app = express()

bd( config.DB_URL )

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))

routes( app )

app.use(config.CLIENT_URL, express.static(config.CLIENT_DIR))
app.listen( config.PORT )
console.log(`La aplicacion esta escuchando en http://localhost:${config.PORT}`)
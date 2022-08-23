const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: String,
    date_time: Date
})

const model = mongoose.model('file', dataSchema)
module.exports = model
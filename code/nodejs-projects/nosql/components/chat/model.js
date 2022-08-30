const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    users: [ {
        type: Schema.ObjectId,
        ref: 'user'
    } ]
})

const model = mongoose.model('chat', dataSchema)
module.exports = model
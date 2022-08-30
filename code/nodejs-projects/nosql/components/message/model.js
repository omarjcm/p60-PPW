const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    message: {
        type: String,
        required: true
    },
    date: Date
})

const model = mongoose.model('message', dataSchema)
module.exports = model
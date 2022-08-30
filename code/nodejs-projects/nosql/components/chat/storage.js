const Model = require('./model')

function addChat(data) {
    const my_data = new Model(data)
    return my_data.save()
}

module.exports = {
    add: addChat,
}
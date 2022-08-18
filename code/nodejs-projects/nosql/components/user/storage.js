const Model = require('./model')

function addUser(data) {
    const my_data = new Model(data)
    return my_data.save()
}

async function getUsers(filter) {
    let new_filter = {}
    if (filter.user != null) {
        new_filter = {user: filter.user}
    } 
    return await Model.find( new_filter )
}

module.exports = {
    add: addUser,
    get: getUsers,
}
const Model = require('./model')

function addUser(data) {
    const my_data = new Model(data)
    return my_data.save()
}

async function updateUser(data) {
    const foundUser = await Model.findOne( {_id: data.id} )
    foundUser.user = data.user
    foundUser.name = data.name
    foundUser.last_name = data.last_name
    return await foundUser.save()
}

async function deleteUser(data) {
    return await Model.deleteOne( {_id: data.id} )
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
    update: updateUser,
    delete: deleteUser,
    get: getUsers,
}
const storage = require('./storage')

function addUser(dato) {
    return new Promise((resolve, reject) => {
        try {
            resolve(storage.add(dato))
        } catch(error) {
            reject(error)
        }
    })
}

function updateUser(dato) {

}

function getUsers(filter) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filter))
    })
}

module.exports = {
    addUser,
    updateUser,
    getUsers
}
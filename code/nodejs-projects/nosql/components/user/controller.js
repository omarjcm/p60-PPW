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

module.exports = {
    addUser,
    updateUser
}
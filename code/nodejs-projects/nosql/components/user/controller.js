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
    return new Promise((resolve, reject) => {
        try {
            resolve( storage.update(dato) )
        } catch(error) {
            reject( error )
        }
    })
}

function deleteUser(dato) {
    return new Promise((resolve, reject) => {
        try {
            resolve( storage.delete(dato) )
        } catch(error) {
            reject( error )
        }
    })    
}

function getUsers(filter) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filter))
    })
}

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getUsers
}
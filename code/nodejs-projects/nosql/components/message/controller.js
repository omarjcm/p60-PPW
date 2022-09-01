const storage = require('./storage')

function getMessages(filter) {
    return new Promise((resolve, reject) => {
        console.log(`controller - ${filter}`)
        resolve( storage.get(filter) )
    })
}

function addMessage(data) {
    return new Promise((resolve, reject) => {
        if (!data.user || !data.chat || !data.message) {
            return reject('Los datos son incorrectos.')
        }
        try {
            let message = {
                ... data,
                date: new Date()
            }
            resolve(storage.add(message))
        } catch(error) {
            reject(error)
        }
    })
}

module.exports = {
    getMessages,
    addMessage,
}
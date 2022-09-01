const Model = require('./model')

function getMessages(filter) {
    return new Promise((resolve, reject) => {
        let my_filter = {}
        if (filter != null){
            console.log(filter)
            my_filter = { chat: filter.chat }
        }
        resolve( Model.find(my_filter) )    
    })
}

async function addMessage(data) {
    const my_data = await new Model(data)
    return my_data.save()
}

module.exports = {
    add: addMessage,
    get: getMessages,
}
const Model = require('./model')

function getMessages(filter) {
    return new Promise((resolve, reject) => {
        let my_filter = {}
        if (filter != null){
            console.log(filter)
            my_filter = { chat: filter.chat }
        }
        Model.find(my_filter)
            .populate('user')
            .populate('chat')
            .exec( (error, populated) => {
                console.log(populated)
                if (error) {
                    reject(error)
                } else {
                    resolve(populated)
                }
            } )
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
// Gestionando el asincronismo mediante async-await

// Gestion del asincronismo mediante promesas
async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Inciando conversacion.')
            console.log(`Hola ${nombre}.`)
            resolve(nombre)
        }, 1000)            
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios ${nombre}.`)
            console.log(`Finalizando conversacion.`)
            resolve(nombre)
        }, 1000)    
    })
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bla bla bla.`)
            resolve(nombre)
        }, 1000)    
    })
}

async function conversacion() {
    let nombre = await hola('David')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

conversacion()


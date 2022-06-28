// Gestion del asincronismo mediante promesas
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Inciando conversacion.')
            console.log(`Hola ${nombre}.`)
            resolve(nombre)
        }, 1000)            
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios ${nombre}.`)
            console.log(`Finalizando conversacion.`)
            resolve(nombre)
        }, 1000)    
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bla bla bla.`)
            resolve(nombre)
        }, 1000)    
    })
}

hola('David')
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
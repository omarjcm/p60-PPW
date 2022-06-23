function hola(nombre, fn) {
    setTimeout(function() {
        console.log('Inciando conversacion.')
        console.log(`Hola ${nombre}.`)
        fn(nombre)
    }, 1000)
}

function adios(nombre) {
    setTimeout(function() {
        console.log(`Adios ${nombre}.`)
        console.log(`Finalizando conversacion.`)
    }, 1000)
}

function dialogar(nombre, num_veces) {
    if (num_veces > 0) {
        hablar(function() {
            dialogar(nombre, --num_veces)
        })
    } else {
        adios(nombre)
    }
}

function hablar(fn) {
    setTimeout(function() {
        console.log(`Bla bla bla.`)
        fn()
    }, 1000)
}

function iniciar_conversacion(nombre) {
    dialogar(nombre, 10)
}

hola('David', iniciar_conversacion)
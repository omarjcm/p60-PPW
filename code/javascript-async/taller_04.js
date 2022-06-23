function hola(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}.`)
        dialogar(10)
        fn(nombre)
    }, 1000)
}

function adios(nombre) {
    setTimeout(function() {
        console.log(`Adios ${nombre}.`)
        console.log(`Finalizando conversacion.`)
    }, 1000)
}

function dialogar(num_veces) {
    for (let i=1; i<=num_veces; i++) {
        hablar(i)
    }
}

function hablar(i) {
    setTimeout(function() {
        console.log(`Bla bla bla. - ${i}`)
    }, 1000)
}

console.log('Inciando conversacion.')
hola('David', adios)
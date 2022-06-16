// Funciones declarativa
function print(texto) {
    console.log(texto)
}

print('Hola mundo.')

// Funcion expresiva
const imprimir = function(texto) {
    console.log(texto)
}

imprimir('Hola mundo. De nuevo.')

// Funcion flecha
const imprimer = (texto) => console.log(texto)

const suma = (a, b) => {
    let resultado = a + b
    console.log( `La suma de ${a} y ${b} es ${resultado}.` )
}

imprimer( 'Hola mundo. Nuevamente.' )
suma(10, 20)
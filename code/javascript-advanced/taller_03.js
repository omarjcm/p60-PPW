// Definicion de clases segun la especificacion de ECMAScript
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola soy ${this.nombre} ${this.apellido}.`)
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    es_alto() {
        if (this.altura >= 1.7) {
            console.log(`Mi altura es ${this.altura} y soy alto.`)
        } else {
            console.log(`Mi altura es ${this.altura} y no soy alto.`)
        }    
    }
}

function responder_saludo( nombre ) {
    console.log(`Hola ${nombre}, ¿cómo estás?.`)
}

var persona1 = new Persona('Guillermo', 'Pizarro', 1.65)
persona1.saludar(responder_saludo)
persona1.es_alto()
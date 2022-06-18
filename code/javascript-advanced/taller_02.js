// Definicion de clases segun la especificacion de ECMAScript
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}.`)
    }

    es_alto() {
        if (this.altura >= 1.7) {
            console.log(`Mi altura es ${this.altura} y soy alto.`)
        } else {
            console.log(`Mi altura es ${this.altura} y no soy alto.`)
        }    
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy un deportista.`)
    }
}

var persona1 = new Persona('Guillermo', 'Pizarro', 1.65)
persona1.saludar()
persona1.es_alto()

var persona2 = new Deportista('Alejandro', 'Chucuyan')
persona2.saludar()
persona2.altura = 2.0
persona2.es_alto()
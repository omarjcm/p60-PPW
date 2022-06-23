// Javascript Nativo

// Funcion que me permite crear enlaces entre los prototipos de funciones.
function Hereda(prototipo_padre, prototipo_hijo) {
    let fn = function(){}
    fn.prototype = prototipo_padre.prototype
    prototipo_hijo.prototype = new fn()
    prototipo_hijo.prototype.constructor = prototipo_hijo
}

// Funcion Persona (Clases) que me permite crear un objeto del tipo Persona.
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola soy ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.es_alto = function() {
    if (this.altura >= 1.7) {
        console.log(`Mi altura es ${this.altura} y soy alto.`)
    } else {
        console.log(`Mi altura es ${this.altura} y no soy alto.`)
    }
}

// Funcion Deportista que me permite crear un objeto del tipo Deportista.
function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Hereda(Persona, Deportista)

Deportista.prototype.saludar = function() {
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy un deportista.`)
} 

var persona1 = new Persona('Guillermo', 'Pizarro', 1.65)
persona1.saludar()
persona1.es_alto()

var persona2 = new Deportista('Alejandro', 'Chucuyan')
persona2.saludar()
persona2.altura = 2.0
persona2.es_alto()


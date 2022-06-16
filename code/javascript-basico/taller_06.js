var investigador1 = {
    nombre: 'Douglas',
    apellido: 'Coronado',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'dcoronado@est.ups.edu.ec',
    edad: 18
}

var investigador2 = {
    nombre: 'Luisa',
    apellido: 'Mendoza',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'lmendoza@est.ups.edu.ec',
    edad: 22
}

// Paso por referencia
const cumpleanios = (objeto) => objeto.edad += 1

console.log(investigador1)
cumpleanios(investigador1)
console.log(investigador1)

// Paso por valor
const cumpleanios_x_valor = (objeto) => {
    return {
        ... objeto,
        edad: objeto.edad + 1
    }
}

console.log(investigador2)
cumpleanios_x_valor(investigador2)
console.log(investigador2)

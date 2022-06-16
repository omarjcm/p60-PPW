var articulos = [
    { nombre: 'Bicicleta', modelo: 'BMX', color: 'Azul', costo: 150 },
    { nombre: 'TV Sony', modelo: 'XBR-85Z8H', color: 'negro', costo: 7000  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'Lenovo', color: 'gris', costo: 860  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'Lenovo', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'DELL', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'DELL', color: 'gris', costo: 1300  },
    { nombre: 'Auriculares Cancel Noise', modelo: 'Sony', color: 'blanco', costo: 150  },
    { nombre: 'Audifonos Cancel Noise', modelo: 'Sony', color: 'azul', costo: 200  },
    { nombre: 'Mouse inalambrico', modelo: 'Kensington', color: 'negro', costo: 50  },
    { nombre: 'Mouse inalambrico', modelo: 'Havic', color: 'rojo', costo: 15  },
    { nombre: 'Tablet', modelo: 'Samsung', color: 'gris', costo: 400 }    
]

// FOREACH
articulos.forEach( (articulo) => {
    console.log( `${articulo.nombre} - ${articulo.modelo} de color ${articulo.color}.` )
} )

// SOME
var existen_articulos_baratos = articulos.some( (articulo) => articulo.costo <= 50 )
if (existen_articulos_baratos) {
    console.log('Existen articulos baratos.')
} else {
    console.log('No existen articulos baratos.')
}

// FILTER
var articulos_baratos = articulos.filter((articulo) => articulo.costo <= 50)
console.log(articulos_baratos)

// MAP 
var articulos_modificados = articulos.map( (articulo) => articulo.nombre.toUpperCase() )
console.log(articulos_modificados)

// FIND
var articulos_encontrado = articulos.find( (articulo) => articulo.nombre == 'Laptop i5 16GB 15"' )
console.log(articulos_encontrado)

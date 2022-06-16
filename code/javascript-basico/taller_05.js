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

const mostrar_articulo = (articulo) => {
    console.log(`${articulo.nombre}. Modelo: ${articulo.modelo}.`)
}

for (let i=0; i<articulos.length; i++) {
    mostrar_articulo( articulos[i] )
}

for(let articulo of articulos) {
    mostrar_articulo(articulo)
}

console.log('========Uso del foreach')
articulos.forEach((articulo) => mostrar_articulo(articulo))

console.log('========Uso del While')
while(articulos.length > 0) {
    let articulo = articulos.shift()
    mostrar_articulo(articulo)
}
console.log(articulos)
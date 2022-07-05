const fetchData = require('./utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const obtenerPersonaje = (id) => {
    return fetchData(`${API}${id}`)
}

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let promesas = ids.map( id => obtenerPersonaje(id) )

// Promesas en paralelo.
Promise
    .all( promesas )
    .then( data => {
        for(let i=0; i<data.length; i++) {
            console.log( data[i].id + '-' + data[i].name )
        }
    } )

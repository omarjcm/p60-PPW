const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest()
        xmlhttp.open('GET', url_api, true)
        xmlhttp.onreadystatechange = function(e) {
            if (xmlhttp.readyState == 4) {
                (xmlhttp.status == 200) 
                    ? resolve(JSON.parse(xmlhttp.responseText)) 
                    : reject(new Error('[error] - ' + url_api))
            }
        }
        xmlhttp.send()    
    }) 
}

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
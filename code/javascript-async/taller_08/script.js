const print = (dato) => console.log(dato)
const URL = 'https://rickandmortyapi.com/api/character/'
var xhttp = null

function cargar_personaje(URL_personaje, fn) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(data) {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                fn(JSON.parse( xhttp.responseText ))
            } else {
                const error = new Error('Hubo problemas con la conexion.')
                fn(null, error)
            }
        }
    }
    xhttp.open('GET', URL_personaje, true)
    xhttp.send()
}

const invocacion_asincrona = function(dato, error) {
    if (error)
        return print(error)

    for (let i=2; i<=10; i++) {
        cargar_personaje(URL + dato.results[i].id, function(dato2, error2) {
            let container = document.getElementById('container')

            let h1 = document.createElement('h1')
            let h1_texto = document.createTextNode(dato2.id + ' - ' + dato2.name)
            h1.appendChild(h1_texto)

            container.appendChild(h1)
        })
    }
}

cargar_personaje(URL, invocacion_asincrona)
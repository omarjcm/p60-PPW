const URL = 'https://rickandmortyapi.com/api/character/1'
var xhttp = null
var dato = null

function conexion() {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL, true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            dato = JSON.parse( xhttp.responseText )
            //console.log( xhttp.responseText )
            let container = document.getElementById('container')
            container.innerHTML = `<h1>${dato.name}</h1><img src="${dato.image}"/>`
        } else {
            console.error('Hubo problemas con la conexion.')
        }
    }
}

conexion()
const URL = 'https://rickandmortyapi.com/api/character/'
var xhttp = null
var dato = null
var personajes = []

function conexion(personaje) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL + personaje, true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            dato = JSON.parse( xhttp.responseText )
            
            let personaje = document.createElement('div')
            let h1 = document.createElement('h1')
            let h1_texto = document.createTextNode(dato.id + ' - ' + dato.name)
            h1.appendChild(h1_texto)
            personaje.appendChild(h1)

            let img = document.createElement('img')
            img.src = dato.image
            personaje.appendChild(img)

            personajes.push( dato )
        } else {
            console.error('Hubo problemas con la conexion.')
        }
    }
}

function obtener_personajes() {
    for (let i=1; i<=10; i++) {
        conexion(i)
    }
    console.log( personajes )

//    let container = document.getElementById('container')
//    for (personaje of personajes) {
//        container.appendChild(personaje)
//    }
}

obtener_personajes()
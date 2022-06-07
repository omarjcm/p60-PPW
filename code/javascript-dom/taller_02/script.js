function agregar_elemento() {
    var container = document.getElementById('container')

    var h1 = document.createElement('h1')
    var texto = document.createTextNode('Programacion y Plataformas Web')
    h1.appendChild(texto)
    
    container.appendChild(h1)
}
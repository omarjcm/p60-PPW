function agregar_elemento() {
    var valor = document.getElementById('valor')

    var container = document.getElementById('container')

    var h1 = document.createElement('h1')
    var texto = document.createTextNode(valor.value)
    h1.appendChild(texto)
    
    container.appendChild(h1)
}
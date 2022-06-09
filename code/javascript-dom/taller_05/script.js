function agregar_elemento() {
    var valor = document.getElementById('valor')

    var container = document.getElementById('container')
    container.outerHTML = '<h1>' + valor.value + '</h1>'
}
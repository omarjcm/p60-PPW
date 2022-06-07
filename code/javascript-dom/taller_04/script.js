function agregar_elemento() {
    var valor = document.getElementById('valor')

    var container = document.getElementById('container')
    container.innerHTML = '<h1>' + valor.value + '</h1>'
}
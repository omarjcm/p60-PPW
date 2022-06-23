function seleccionar_capa(opcion) {
    var opcion_1 = document.getElementById('opcion-1')
    var opcion_2 = document.getElementById('opcion-2')

    if (opcion == 1) {
        opcion_1.style.zIndex = 2
        opcion_2.style.zIndex = 1

        setTimeout(function() {
            opcion_2.style.left = (opcion_2.offsetLeft + 10) + 'px'
        }, 1000)
        setTimeout(function() {
            opcion_2.style.left = (opcion_2.offsetLeft + 10) + 'px'
        }, 2000)
        setTimeout(function() {
            opcion_2.style.left = (opcion_2.offsetLeft + 10) + 'px'
        }, 3000)
        setTimeout(function() {
            opcion_2.style.left = (opcion_2.offsetLeft + 10) + 'px'
        }, 4000)
    } else {
        opcion_1.style.zIndex = 1
        opcion_2.style.zIndex = 2
    }
}
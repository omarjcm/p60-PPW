var cajita = document.getElementById('cajita-salesiana')
var distancia = [0, 0]
var es_presionado = false

cajita.addEventListener('mousedown', function(e){
    es_presionado = true

    distancia = [
        cajita.offsetLeft - e.clientX,
        cajita.offsetTop - e.clientY
    ]
}, true)

cajita.addEventListener('mouseup', function(e){
    es_presionado = false
}, true)

cajita.addEventListener('mousemove', function(e){
    if (es_presionado) {
        cajita.style.left = (e.clientX + distancia[0]) + 'px'
        cajita.style.top = (e.clientY + distancia[1]) + 'px'
    }
}, true)
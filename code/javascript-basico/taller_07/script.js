var contactos = []

const guardar = function() {
    let nombre_ = document.getElementById('nombre').value
    let apellido_ = document.getElementById('apellido').value
    let correo_ = document.getElementById('correo').value

    let objeto = {
        nombre: nombre_,
        apellido: apellido_,
        correo: correo_
    }

    contactos.push(objeto)
}
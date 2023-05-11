function validar1(formulario) {

    console.log('alerta')

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email1.value)) {
        alert("Email inválido");
        return false;
    }

    if (formulario.contrasena1.value.trim().length < 8) {
        alert("Contraseña obligatorio");
        return false;
    }

    if (formulario.contrasena1.value != formulario.confirmacion.value) {
        alert("Confirmación no coincide");
        return false;
    }

    if (formulario.genero.value == "") {
        alert("El genero es obligatorio");
        return false;
    }

    if (formulario.radio3.checked || formulario.radio2.checked || formulario.radio3.checked) {
        alert("Debe aceptar los términos y condiciones");
        return false;
    }

    if (!formulario.terminos1.checked) {
        alert("Debe aceptar los términos y condiciones");
        return false;
    }

    return true;
}

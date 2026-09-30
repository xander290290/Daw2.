"use strict"
function obtenerPrecioEnvio(esMiembro) {
    return esMiembro ? console.log("0") : console.log("5.99");
}
obtenerPrecioEnvio(false);
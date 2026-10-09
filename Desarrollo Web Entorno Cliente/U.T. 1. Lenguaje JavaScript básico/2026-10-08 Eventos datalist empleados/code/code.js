import { empleados } from "./empleados.js";

agregrarEmpleados();
consigurarEmpleadoCambiado();

/**
 * Recorre el array y añade empleados al Datalist
 * @param {*} empleados El arreglo de empleados
 * @returns {undefined}
 */

function agregrarEmpleados () {
    const nDatalist = document.getElementById('eDtlsEmpleados');

    empleados.forEach(empleado => {
        const nOption = document.createElement('option');
        nOption.setAttribute('value', `${empleado.nombre} ${empleado.apellido}`);

        nDatalist.appendChild(nOption);
    })
}

function consigurarEmpleadoCambiado() {
    const nText = document.getElementById('eTextEmpleado');
    nText.addEventListener('change', llenarDataEmpleado)
}

function llenarDataEmpleado(e) {
    const nText = e.target;
    const dni = nText.value;
    const empleado = empleados.find( empleado => empleado.dni === dni);
    console.log(empleado);
}
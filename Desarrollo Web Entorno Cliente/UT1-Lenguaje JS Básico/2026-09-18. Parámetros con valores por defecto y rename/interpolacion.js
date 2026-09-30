'use strict';

console.clear();

function mostrarMensaje(
    nombre='pepe', 
    apellidos='enrique', 
    poblacion='lorca', 
    pais='españa') {
    
        console.log(`Hola soy ${nombre}, y vivo en ${poblacion}, ${pais}`);
}

mostrarMensaje();
mostrarMensaje('Maria','sanchez',undefined);

//Esto funciona en python pero no en JavaScript
//
//mostrarMensaje(nombre = 'marcos', poblacion='albacete');
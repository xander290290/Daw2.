"use strict"

console.clear();
console.log('En JavaScript, las funciones son ciudadanos de primera clase'); //Quiere decuir que las funciones se tratan como cualquier otro valor. Asignarlo a variables, pasar como argumentos, etc.

function esMayorDeEdad() {
    return edad <= 18 ? true : false;
}

function devolverSiete(){
    return 7;
}

console.log(devolverSiete); // Al no tener parentesis no se ejecutó la función, solo indico que es una función
console.log(devolverSiete()); // Aquí si que ejecuto la función

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function operarYMostrarResultado(operacion, num1, num2){
    let resultado = operacion(num1, num2);
    return resultado;
}

// callback: una función que se pasa como argumento a otra función
console.log(operarYMostrarResultado(sumar, 2, 2));
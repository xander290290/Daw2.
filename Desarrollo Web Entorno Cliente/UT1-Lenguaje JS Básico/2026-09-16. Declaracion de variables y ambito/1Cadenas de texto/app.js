"use strict";


var nombre = 'Alexander';
var apellidos = 'Ayala';
var poblacion = 'lorca';
var pais = 'españa';
var edad = 20;

var mensaje = 'hola, soy '+nombre+' '+apellidos+'. Vivo en '+poblacion+', '+pais+' y tengo '+edad+' años.';

console.log(mensaje);

// Interpolación de cadenas. Otra forma de concatenar sin usar +

var mensaje2 = `Hola, soy ${nombre} y tengo ${edad} años`; //Obligatorio usar la tilde francesa
console.log(mensaje2);

var mensaje3 = `Hola, soy ${nombre} y tengo ${edad + 1} años`; //Con la interpolación puedo hacer operaciones o concatenar dentro de las llaves
console.log(mensaje3);

var mensaje4 = 
`\tHola, soy ${nombre}.
\nTengo ${edad + 1} años`; // \t=tabulación \n= salto de linea 
console.log(mensaje4);

var mensaje5 = `Soy ${edad <18 ? 'menor' : 'mayor'} de edad`; //Operador terniario. Usarlo para deciciones sencillas
console.log(mensaje5);



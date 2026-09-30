"use strict"
let esPremium = true;

function mostrarInicio() {
    console.log('Catálogo');
    console.log('blabla___1');
    console.log('bleble___2');
}

function mostrarAnuncio() {
    console.log('Mil dosientos...');
}

esPremium ? mostrarInicio() : mostrarAnuncio();
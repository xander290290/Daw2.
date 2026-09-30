//Primera forma de crear un arreglo. Literal de arreglo
let diasSeamana = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

console.clear();
console.log(diasSeamana);
console.table(diasSeamana);


//Segunda forma. Indicando la posicion
var frutas = [];
frutas[0] = 'pera';
frutas[1] = 'manzana';
frutas[2] = 'banana';
frutas[5] = 'melon';
frutas[6] = 'sandia';

console.log(frutas);
console.table(frutas);


//Tercera forma. Empleando la clase array
const alumnos = new Array();

alumnos.push('antonio');
alumnos.push('pepe','ferran');
alumnos.unshift('pablo');
//operador spread
alumnos.push(...['alexander,','bermudez']);

console.log(alumnos);
console.table(alumnos);


//Cuarta forma. Array asociativo
let mesesAño = [];

mesesAño['en'] = 'enero';
mesesAño['en'] = 'febrero';
mesesAño['en'] = 'marzo';
mesesAño['en'] = 'abril';
mesesAño['en'] = 'mayo';
mesesAño['en'] = 'junio';
mesesAño['en'] = 'julio';
mesesAño['en'] = 'agosto';
mesesAño['en'] = 'septiembre';
mesesAño['en'] = 'octubre';
mesesAño['en'] = 'noviembre';
mesesAño['en'] = 'diciembre';

console.table(mesesAño);
console.log(JSON.stringify(mesesAño)); //Convierte el arreglo a un string en formato JSON
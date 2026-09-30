"use strict"; // Nos obliga a declarar las variables

// 4 formas de declarar variables

//edad1 = 10; //variable global (Error al no estar declarada por el use strict)
// var edad2 = 12; //forma antigua
// const edad4 = 16; //constante ES6

// {
//     let edad3 = 14; //forma actual ES6
//     console.log(edad3);

//     {
//         let edad5 = 18;
//         console.log(edad5);
//         console.log(edad3); // No da error ya que el ambito de declaracion de edad3 aun no terminó
//     }
// }

//console.log(edad3); //Error al no estar en el mismo ambito de declaracion

//--------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------//

// test_ambito: Snakecase al usar nombres con barra baja

console.clear(); //Limpiar la pantalla al iniciar el programa

testAmbito(); // hoisting

function testAmbito() {
    for (var i = 1; i < 5; i++) {
        
        console.log(i, edad1);
    }

    var edad1 = 10; // hoisting 
    console.log(edad1);
}
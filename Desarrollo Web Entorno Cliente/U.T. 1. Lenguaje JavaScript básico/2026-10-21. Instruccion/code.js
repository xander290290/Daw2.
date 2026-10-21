// function devolver7 () {
//     if (true) 
//         return 7;
//     else
//         throw new Error('Hay un problema');
// }

/*Sintaxis antigua*/
// function devolver7 () {
//     const promesa = new Promise((resolve, reject) => {
//         if (false) 
//             resolve(7);
//         else
//             reject('Hay un problema');
//     });

//     return promesa;
// }

/**Sintaxis nueva */
async function devolver7 () {
        if (false) 
            resolve(7);
        else
            reject('Hay un problema');
}

devolver7().then(Resultado => console.log(Resultado)).catch(error => console.error(error.message))
console.log('FIN')


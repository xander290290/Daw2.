let posicionActual = -810;

const nDiv = document.getElementById('etDivNumero');

//Puedo acceder al css desde JavaScript usando la propiedad style de la etiqueta

/// nDiv.style.backgroundPositionX = posicionActual + 'px';


//Ejecuta la funcion indicada de forma indefinida cada 

setInterval(
    function(){
        nDiv.style.backgroundPositionX = posicionActual + 'px';
        posicionActual = posicionActual + 90;
        if (posicionActual > 0) {
            posicionActual = -810;
        }
    },1000
)

import { vehicles } from './data.js';

crearCheckbox();

function crearCheckbox () {
    const nDiv = document.getElementById('edDivCoches');
    nDiv.addEventListener('change', agregarImg);

    for (const coche of vehicles) {
        const nInput = document.createElement('input');
        const nLabel = document.createElement('label');
        const nText = document.createTextNode(coche.model);

        nDiv.appendChild(nInput);
        nInput.setAttribute('type', 'checkbox');
        nInput.setAttribute('name', coche.key);

        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', coche.key);

        nLabel.appendChild(nText);
    }
}

function agregarImg () {
    const nTable = document.getElementById('edTabBody');

    const nTr = document.createElement('tr');
    const nTd = document.createElement('td');

    nTable.appendChild(nTr);
}
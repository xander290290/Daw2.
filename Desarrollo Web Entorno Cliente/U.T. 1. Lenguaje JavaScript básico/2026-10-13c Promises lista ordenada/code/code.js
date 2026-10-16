const response = await fetch("https://pokeapi.co/api/v2/pokemon");

const data = await response.json();

const Pokemons = data.results;

crearElementosLista();

function crearElementosLista () {
    const nLista = document.getElementById('lista');
    for (const poke of Pokemons) {
        const nLi = document.createElement('li');
        const nA = document.createElement('a');

        nLista.appendChild(nLi);

        nA.setAttribute('href', poke.url);
        nLi.appendChild(nA);

        nA.textContent = poke.name;

    }
}

console.log(Pokemons);

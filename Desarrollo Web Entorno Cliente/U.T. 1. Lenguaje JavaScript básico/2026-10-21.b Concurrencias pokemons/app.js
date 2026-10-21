const pokemons = await getPokemons()
console.log(pokemons)

// async function getPokemons() {
//     const url= 'https://pokeapi.co/api/v2/pokemon'
//     const response = await fetch(url)
//     const data = await response.json()
//     const pokemons = data.results

//     const pokeAux = []
//     for (const pokemon of pokemons) {
//         const response = await fetch(pokemon.url)
//         const data = await response.json()
//         const propiedades = {
//             id: data.id,
//             name: data.name,
//             height: data.height,
//             weight: data.weight,
//             image: data.sprites.other.home.front_default
//         }
//         pokeAux.push(propiedades)
//     }

//     return pokeAux
// }
//Nombre, altura, peso y imagen

async function getPokemons() {
    const url= 'https://pokeapi.co/api/v2/pokemon'
    const response = await fetch(url)
    const data = await response.json()
    const pokemons = data.results
    for (const pokemon of pokemons){
        getPokemonByUrl(pokemon.url)
    }
}

async function getPokemonByUrl(url) {
    const pokeAux = []
        const response = await fetch(url)
        const data = await response.json()
        const propiedades = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            image: data.sprites.other.home.front_default
        }
        pokeAux.push(propiedades)
        return pokeAux
}
async function traduccion(frase) {
    const urlApi = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q="+frase);
    const data = await urlApi.json();
    console.log(data[0][0][0])

    return data[0][0][0];
}


async function recuperarYMostrarBroma() {
    const url = "https://api.chucknorris.io/jokes/random";

    const response = await fetch(url);
    const data = await response.json();
    const broma = data.value;
    console.log(broma);

    const frase = await traduccion(broma);

    document.getElementById('Chuck').textContent = frase;

}
         
recuperarYMostrarBroma();
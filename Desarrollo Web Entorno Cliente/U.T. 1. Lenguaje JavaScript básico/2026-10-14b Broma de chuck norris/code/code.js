async function recuperarYMostrarBroma() {
    const url = "https://api.chucknorris.io/jokes/random";

    const response = await fetch(url);
    const data = await response.json();
    const broma = data.value;

    console.log(broma);

    const nId = document.getElementById('Chuck').textContent = broma;
}

recuperarYMostrarBroma();
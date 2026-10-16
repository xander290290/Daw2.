agregarCategorias();

async function agregarCategorias () {
    const nSelect = document.getElementById('eSelCat');
    const response = await fetch ('https://dummyjson.com/products/categories');
    const data = await response.json();
    nSelect.addEventListener('change', agregarStock)

    for (const categoria of data) {
        const nOption = document.createElement('option');
        nOption.textContent = categoria.name;
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', categoria.slug)
    }
}

async function agregarStock (e) {
    const nSection = document.getElementById('eSecCat');
    const url = 'https://dummyjson.com/products/category/'+e.target.value;
    const response = await fetch (url)
    const data = await response.json();
    const arrayProducts = data.products
    for (const productos of arrayProducts) {
        const nArticle = document.createElement('article')
        nSection.appendChild(nArticle)
        nArticle.textContent = productos.title

    }
}
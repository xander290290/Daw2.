import { DummyService } from "../services/dummy-service.js";

const service = new DummyService();
const categories = await service.getCategories();

const nSection = document.querySelector('#tSctCategories');
categories.forEach(category => {
    const nArticle = nSection.appendChild(document.createElement('article'));
    nArticle.classList.add('card-category');
    nArticle.dataset.category = category.id;
    nArticle.addEventListener('click', cardclick);

    const nHeader = nArticle.appendChild(document.createElement('header'));
    const nAnchor = nHeader.appendChild(document.createElement('a'));
    nAnchor.textContent = category.name;
    nAnchor.href = `https://dummyjson.com/products/category/${category.id}`;

    const nImage = nArticle.appendChild(document.createElement('img'));
    nImage.src = 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp';
});

function cardclick(e) {
    const nCard = e.currentTarget;
    // const category = nCard.getattribute('data-category');
    const category = nCard.dataset.category;
    // Reenvio empleando la sintaxis de JS
    window.location = `https://dummyjson.com/products/category/${category}`;
}
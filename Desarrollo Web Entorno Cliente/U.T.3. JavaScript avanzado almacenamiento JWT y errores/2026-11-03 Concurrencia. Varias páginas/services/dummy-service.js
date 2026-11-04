import { CategoryModel } from "../models/category.model.js";

export class CategoryDTO {
    #slug;
    #name;

    constructor(slug, name) {
        this.#slug = slug;
        this.#name = name;
    }

    get slug() {
        return this.#slug;
    }

    get name() {
        return this.#name;
    }
}

export class DummyService {
    static BASE_URL = 'https://dummyjson.com/products/';

    async getCategories() {
        try {
            const url = DummyService.BASE_URL + 'categories';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();

            // const categories = data.map(categoryDto => new CategoryModel(categoryDto.slug, categoryDto.name));
            const categories = data.map(({slug, name}) => new CategoryModel(slug, name));
            return categories;
        } catch (error) {
            throw new DummyServiceError('No puedo recuperar las categorías', error.message, 'getCategories');
        }
    } 
}

export class DummyServiceError extends Error {
    constructor(message, cause, method) {
        super(`[DummyServiceError ${method}]: ${message}. ${cause}`);
    }
}
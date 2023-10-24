import { getNames } from "./sample-module.js";

const url = "https://run.mocky.io/v3/d05074ec-7013-4960-93c4-7907b32bf6bf";
// const mainGrid = document.querySelector('#main-grid');
// let select = document.querySelector('#select');

const divbox = document.querySelector('#img');

let recipeList = [];

const getRecipes = async () => {
    let response = await fetch(url);
    if (response.ok) {
        recipeList = await response.json();
        display(recipeList);
        getNames(recipeList)
    }
}

const display = (list) => {
    list.forEach((e) => {
        const img = document.createElement('img');
        img.setAttribute('src', e.image);
        img.setAttribute('alt', 'Food Image');
        divbox.appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = e.foodName;
        divbox.appendChild(h2);
    });
}

// const reset = () => {
    $(divbox).empty();
// }

// reset();
getRecipes();
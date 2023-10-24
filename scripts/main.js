import { recipe, displayAll } from "./modules.js";
const url = "https://run.mocky.io/v3/7ee5b2bf-347b-4680-b765-d7fd03c21b8e";
const mainGrid = document.querySelector('#main-grid');
let select = document.querySelector('#select');
let recipeList = [];

const getRecipes = async () => {
    let response = await fetch(url);
    if (response.ok) {
      recipeList = await response.json();
        recipe(recipeList);
        displayAll(recipeList, mainGrid);
    }
}

const displayRecipe = (recipeList) => {
    recipeList.forEach(recipe => {
        // sec-img
        const secImg = document.createElement('section');
        secImg.setAttribute('id', 'sec-img');

        const img = document.createElement('img');
        img.setAttribute('src', recipe.image);
        img.setAttribute('alt', 'food image');

        const imgH2 = document.createElement('h2');
        imgH2.setAttribute('class', 'food-name');
        imgH2.textContent = recipe.foodName;

        secImg.appendChild(img);
        secImg.appendChild(imgH2);

        mainGrid.appendChild(secImg);

        // sec-details
        const secDetails = document.createElement('section');
        secDetails.setAttribute('id', 'sec-details');

        const detailsH2 = document.createElement('h2');
        detailsH2.textContent = `Ingredients`;
        const detailsText = document.createElement('p');

        for(let i of recipe.ingredients) {
            detailsText.innerHTML += `${i}</br>`;
        }

        secDetails.appendChild(detailsH2);
        secDetails.appendChild(detailsText);
        mainGrid.appendChild(secDetails);

        // food-origin
        const foodOrigin = document.createElement('section');
        foodOrigin.setAttribute('id', 'food-origin');

        const originH2 = document.createElement('h2');
        originH2.textContent = `Place of origin`;
        const originText = document.createElement('p');
        originText.textContent = recipe.origin;

        foodOrigin.appendChild(originH2);
        foodOrigin.appendChild(originText);
        mainGrid.appendChild(foodOrigin);

    });
}

const reset = () => {
    mainGrid.innerHTML = "";
}

const filteredFood = (recipeList) => {
    reset();
    recipeList.forEach(e => {
        switch (select.value) {
            case 'All':
                reset()
                displayAll(recipeList, mainGrid);
            break;
            case e.foodName:
                displayRecipe(recipeList.filter(e => e.foodName.includes(select.value)));
            break;
        }
    });
}

document.querySelector('#select').addEventListener('change', () => {filteredFood(recipeList)});
getRecipes();
export {recipe, displayAll};

const recipe = (recipes, element=select) => {
    recipes.forEach(recipe => {
        const option = document.createElement('option');
        option.textContent = recipe.foodName;
        option.setAttribute('value', recipe.foodName);

        element.appendChild(option);
    });
}

const displayAll = (recipes, element) => {
    const containerDiv = document.createElement('div'); // put inside mainGrid
    containerDiv.setAttribute('id', 'box');
        
    recipes.forEach(recipe => {
        
        const innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'gallery');
        containerDiv.appendChild(innerDiv);

        // const foodImg = document.createElement('img');
        // foodImg.setAttribute('src', recipe.image);
        // foodImg.setAttribute('alt', 'Food Image');

        // innerDiv.appendChild(foodImg);

        containerDiv.innerHTML += `
            <div class="responsive">
                <div class="gallery">
                    <img src="${recipe.image}" alt="Food Image">
                    <div class="desc">${recipe.foodName}</div>
                </div>
            </div>
        `;

        element.appendChild(containerDiv);

    });
}


export {getNames};

const getNames = (foodList) => {
    foodList.forEach(food => {
        const filter = document.querySelector('#filter');
        const option = document.createElement('option');
        option.setAttribute('value', food.foodName);
        option.textContent = food.foodName;

        filter.appendChild(option);
    });
}
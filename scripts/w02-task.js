/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'James Tubban';
let currentYear = 2023;
let profilePicture = 'images/me.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
const foodElement = document.querySelector('#food');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Rice', 'Pork Adobo', 'Sisig', 'Roast Pork', 'Grilled Steak']
foodElement.innerHTML += `<br>${favoriteFoods}`;
let potatoSalad = 'Mix Veggies Sallad';
favoriteFoods.push(potatoSalad)
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`;
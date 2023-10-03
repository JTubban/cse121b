/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'James Tubban',
    photo: 'images/me.png',
    favoriteFoods: [
        'Rice',
        'Pork Adobo',
        'Sisig',
        'Roast Pork',
        'Grilled Steak'
    ],
    hobbies: [
        'Book reading',
        'Software Development',
        'Body building',
        'Playing guitar',
        'Eating'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Tuao, Philippines',
        length: '23 years'
    },
    {
        place: 'Honolulu Hawaii, HI',
        length: '2 years'
    },
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const myPhoto = document.querySelector('#photo');
myPhoto.setAttribute('src', myProfile.photo);
myPhoto.setAttribute('alt', 'image')

/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food

    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;

    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(pl => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    
    dt.textContent = pl.place;
    dd.textContent = pl.length
    
    let placesLived = document.querySelector('#places-lived')
    placesLived.appendChild(dt);
    placesLived.appendChild(dd);
});
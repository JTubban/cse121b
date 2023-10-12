/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (item) => {
    // temples.forEach((item) => {
        const article = document.createElement('article');

        const temName = document.createElement('h3');
        temName.textContent = item.templeName;

        const temImage = document.createElement('img');
        temImage.setAttribute('src', item.imageUrl);
        temImage.setAttribute('alt', item.location);
        temImage.setAttribute('style', 'max-width:400px')
        
        article.appendChild(temName);
        article.appendChild(temImage);
        templesElement.appendChild(article);
    // }); 
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        let data = await response.json();
        templeList = data;
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}
/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filtered = document.querySelector('#sortBy');
    switch (filtered.value) {
        case 'utah':
            temples.filter((e) => {
                if (e.location.includes('Utah')) {
                    displayTemples(e);
                }
            });          
            break;
        case 'notutah':
            temples.filter((e) => {
                if (!e.location.includes('Utah')) {
                    displayTemples(e);
                }
            });
            break;
        case 'older':
            temples.filter((e) => {
                if ("1950, 0, 1" > e.dedicated) {
                    displayTemples(e);
                }
            });
            break;
        case 'all':
            temples.forEach((e) => {
                displayTemples(e);
            });
            break;
    }

}
// /* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {sortBy(templeList)});
getTemples();
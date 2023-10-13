/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((item) => {
    let article = document.createElement("article");

    let temName = document.createElement("h3");
    temName.textContent = item.templeName;

    let temImage = document.createElement("img");
    temImage.setAttribute("src", item.imageUrl);
    temImage.setAttribute("alt", item.location);
    temImage.setAttribute("style", "max-width:400px");

    article.appendChild(temName);
    article.appendChild(temImage);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  if (response.ok) {
    templeList = await response.json();
    displayTemples(templeList);
  }
}
/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};
/* sortBy Function */
const sortBy = (temples) => {
  reset();
  let filtered = document.querySelector("#sortBy");
  switch (filtered.value) {
    case "utah":
		displayTemples(temples.filter(e => e.location.includes('Utah')));
      break;
    case "notutah":
        displayTemples(temples.filter(e => !e.location.includes('Utah')));
      break;
    case "older":
		displayTemples(temples.filter(e => e.dedicated < '1950, 0, 1'));
      break;
    case "all":
        displayTemples(temples);
      break;
  }
};
// /* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
getTemples();
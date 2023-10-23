const url = "https://github.com/JTubban/cse121b/blob/main/recipefinder/jsonfile/recipes.json";
// let url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let recipeList = [];

const getRecipes = async () => {
    let response = await fetch(url);
    if (response.ok) {
      recipeList = await response.json();
        console.log(recipeList);
    }
  } 
getRecipes();
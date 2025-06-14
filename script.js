const recipeFormElement = document.querySelector("#recipe-generator");
function getRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let dietaryRestrictions = document.querySelector(
    "#dietary-restrictions"
  ).value;
  let mainIngredient = document.querySelector("#main-ingredient").value;
  let prompt = `Please provide an easy-to-make ${dietaryRestrictions} recipe using ${mainIngredient}`;
  let context =
    encodeURIComponent(`You are an AI Assistant knowlegable about all types of recipes. Please provide a recipe that takes 60 minutes or less to prep and cook based on the user's requests. Provide recipe that requires only basic kitchen equipment. The Recipe should be in this format: <h2>RECIPE TITLE</h2>
      <h4 class="cook-time">Prep and Cook Time: xx minutes</h4>
      <h4>Serves: x people</h4>
      <h3>Ingredients</h3>
      <div class="list-container">
        <ul class="ingredients">
          <li>Ingredient</li>
          <li>Ingredient</li>
          <li>Ingredient</li>
          <li>Ingredient</li>
          <li>Etc, as many ingredients as neccesary</li>
        </ul>
      </div>
      <h3>Method</h3>
      <div class="list-container">
        <ol class="recipe-method">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
          <li>Etc, as many steps as neccesary</li>
        </ol>
      </div>`);
  let apiKey = "aef1757e37906f8atc32b9da5odbc24a";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  new Typewriter("#recipe", {
    strings: "...",
    autoStart: true,
    cursor: "",
    loop: true,
    delay: 150,
    deleteSpeed: 1,
    pauseFor: 150,
  });
  axios.get(apiURL).then(getRecipe);
}

recipeFormElement.addEventListener("submit", generateRecipe);

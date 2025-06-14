const recipeFormElement = document.querySelector("#recipe-generator");

function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: `<h2>RECIPE TITLE</h2>
      <h4 class="cook-time">30 minutes</h4>
      <h3>Ingredients</h3>
      <div class="list-container">
        <ul class="ingredients">
          <li>Ingredient</li>
          <li>Ingredient</li>
          <li>Ingredient</li>
          <li>Ingredient</li>
        </ul>
      </div>
      <h3>Method</h3>
      <div class="list-container">
        <ol class="recipe-method">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
        </ol>
      </div>`,
    autoStart: true,
    delay: 1,
    curor: "",
  });
}

recipeFormElement.addEventListener("submit", generateRecipe);

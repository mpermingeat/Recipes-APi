const { Router } = require("express");

const recipesRoute = Router();

recipesRoute.post("/", (req, res) => {
  const { name, summaryDish, healthScore, steps } = req.body;
  try {
    const newRecipe = createRecipe(name, summaryDish, healthScore, steps);
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

recipesRoute.get("/", (req, res) => {
  const { name } = req.query;
  try {
    const listsRecipes = getListByName(name);
    res.status(200).json(listsRecipes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

recipesRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const recipeDetails = getDetailsById(id);
    res.status(200).json(recipeDetails);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = recipesRoute;

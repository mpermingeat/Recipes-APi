const { Router } = require("express");
const {
  createRecipe,
  getListByName,
  getDetailsById,
  deleteRecipe,
} = require("../controllers/recipesControllers");

const recipesRoute = Router();

recipesRoute.post("/", async (req, res) => {
  const { title, summary, healthScore, steps, dietsTypes } = req.body;
  try {
    const newRecipe = await createRecipe(
      title,
      summary,
      healthScore,
      steps,
      dietsTypes
    );
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

recipesRoute.get("/", async (req, res) => {
  const { title } = req.query;
  try {
    const listsRecipes = await getListByName(title);
    res.status(200).json(listsRecipes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

recipesRoute.get("/:id/:dataBase", async (req, res) => {
  const { id, dataBase } = req.params;
  try {
    const recipeDetails = await getDetailsById(id, dataBase);
    res.status(200).json(recipeDetails);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

recipesRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteRecipe(id);
    res.status(200).send(`Receta con id ${id} eliminado correctamente`);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = recipesRoute;

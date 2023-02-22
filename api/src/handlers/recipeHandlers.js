const {
  createRecipe,
  getListByName,
  getDetailsById,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipesControllers");
//----------obtener recetas por nombre-----------//
const getRecipeHandler = async (req, res) => {
  const { title } = req.query;
  try {
    const listsRecipes = await getListByName(title);
    res.status(200).json(listsRecipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//--------------Manejador para el detail-------------------//
const getDetailHandler = async (req, res) => {
  const { id, dataBase } = req.params;
  try {
    const recipeDetails = await getDetailsById(id, dataBase);
    res.status(200).json(recipeDetails);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//------------Manejador para crear la receta-------------------------//
const postRecipeHandler = async (req, res) => {
  const { title, summary, healthScore, steps, dietsTypes, dishTypes } =
    req.body;
  try {
    const newRecipe = await createRecipe(
      title,
      summary,
      healthScore,
      steps,
      dietsTypes,
      dishTypes
    );
    res.status(200).send("Receta creada correctamente");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//---------------Manejador de eliminar receta-------------------------//
const deleteRecipeHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteRecipe(id);
    res.status(200).send(`Receta con id ${id} eliminado correctamente`);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//--------------Manejador de actualizacion de recetas----------------//
const updateRecipeHandler = async (req, res) => {
  const { id } = req.params;
  const recipe = req.body;
  console.log(recipe);
  try {
    const updated = await updateRecipe(recipe, id);
    res.status(200).send(updated);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getRecipeHandler,
  getDetailHandler,
  postRecipeHandler,
  deleteRecipeHandler,
  updateRecipeHandler,
};

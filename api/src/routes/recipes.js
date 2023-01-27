const { Router } = require("express");
const {
  getRecipeHandler,
  postRecipeHandler,
  getDetailHandler,
  deleteRecipeHandler,
  updateRecipeHandler,
} = require("../handlers/recipeHandlers");

const recipesRoute = Router();

recipesRoute.get("/", getRecipeHandler);

recipesRoute.get("/:id/:dataBase", getDetailHandler);

recipesRoute.post("/", postRecipeHandler);

recipesRoute.put("/:id", updateRecipeHandler);

recipesRoute.delete("/:id", deleteRecipeHandler);

module.exports = recipesRoute;

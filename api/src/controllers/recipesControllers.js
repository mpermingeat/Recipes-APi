const { Op } = require("sequelize");
const { Recipe, DietTypes } = require("../db");
const { apiKey } = process.env;
const { default: axios } = require("axios");

//crear recetas
const createRecipe = async (
  name,
  summaryDish,
  healthScore,
  steps,
  dietsTypes
) => {
  if (!name || !summaryDish) {
    throw Error("Faltan enviar datos obligatorios");
  }
  const newRecipe = await Recipe.create({
    name,
    summaryDish,
    healthScore,
    steps,
  });
  if (dietsTypes.length === 0) throw Error("Faltan los tipos de dietas");
  newRecipe.setDietTypes(dietsTypes);
  return newRecipe;
};

//traer recetas por nombre, request del search bar
const getListByName = async (name) => {
  const listByName = await Recipe.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [
      {
        model: DietTypes,
        through: {
          attributes: [],
        },
      },
    ],
  });
  const getListApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true`
  );
  let listApi = getListApi.data.results;
  if (listApi.length !== 0) {
    listApi = listApi.filter(function (element) {
      return element.title.toLowerCase().includes(name);
    });
  }

  const allResults = [...listByName, ...listApi];
  if (allResults.length === 0) throw Error("No existen recetas con ese nombre");
  return allResults;
};
//traer por id, para el detail
const getDetailsById = async (id) => {
  const recipeDetail = await Recipe.findByPk(id, {
    include: [
      {
        model: DietTypes,
        through: {
          attributes: [],
        },
      },
    ],
  });
  return recipeDetail;
};

module.exports = { createRecipe, getListByName, getDetailsById };

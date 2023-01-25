const { Op } = require("sequelize");
const { Recipe, DietTypes } = require("../db");
const { apiKey } = process.env;
const { default: axios } = require("axios");

//crear recetas
const createRecipe = async (title, summary, healthScore, steps, dietsTypes) => {
  if (!title || !summary) {
    throw Error("Faltan enviar datos obligatorios");
  }
  const newRecipe = await Recipe.create({
    title,
    summary,
    healthScore,
    steps,
  });
  if (dietsTypes.length === 0) throw Error("Faltan los tipos de dietas");
  newRecipe.setDietTypes(dietsTypes);
  return newRecipe;
};

//traer recetas por nombre, request del search bar
const getListByName = async (title) => {
  const listByName = await Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
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
      return element.title.toLowerCase().includes(title);
    });
  }

  const allResults = [...listByName, ...listApi];
  if (allResults.length === 0) throw Error("No existen recetas con ese nombre");
  return allResults;
};
//traer por id, para el detail
const getDetailsById = async (idSearch, dataBase) => {
  let recipeDetail = {};

  if (dataBase === "true") {
    recipeDetail = await Recipe.findByPk(idSearch, {
      include: [
        {
          model: DietTypes,
          through: {
            attributes: [],
          },
        },
      ],
    });
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${idSearch}/information?apiKey=${apiKey}`
    );
    const { id, title, summary, image, healthScore, diets, instructions } =
      response.data;

    recipeDetail = {
      id,
      title,
      summary,
      image,
      healthScore,
      diets,
      instructions,
    };
  }

  return recipeDetail;
};
//
module.exports = { createRecipe, getListByName, getDetailsById };

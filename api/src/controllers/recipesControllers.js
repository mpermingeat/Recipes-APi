const { Op } = require("sequelize");
const { Recipe, DietTypes } = require("../db");

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

const getListByName = async (name) => {
  const listByName = await Recipe.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  if (listByName.length === 0) throw Error("No existen recetas con ese nombre");
  return listByName;
};

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

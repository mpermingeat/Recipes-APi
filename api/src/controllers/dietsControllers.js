const { DietTypes } = require("../db");
const preDietsList = [
  { name: "gluten free" },
  { name: "ketogenic" },
  { name: "vegetarian" },
  { name: "dairy free" },
  { name: "lacto ovo vegetarian" },
  { name: "vegan" },
  { name: "pescetarian" },
  { name: "paleolithic" },
  { name: "primal" },
  { name: "low FODMAP" },
  { name: "whole 30" },
];

const getDiets = async () => {
  let dietsList = await DietTypes.findAll();

  if (dietsList.length === 0) {
    await DietTypes.bulkCreate(preDietsList);
    dietsList = await DietTypes.findAll();
  }
  return dietsList;
};

module.exports = getDiets;

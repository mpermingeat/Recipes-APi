const { DietTypes } = require("../db");
const preDietsList = [
  { name: "gluten free" },
  { name: "ketogenic" },
  { name: "vegetarian" },
  { name: "lacto-vegetarian" },
  { name: "ovo-vegetarian" },
  { name: "vegan" },
  { name: "pescetarian" },
  { name: "paleo" },
  { name: "primal" },
  { name: "low FODMAP" },
  { name: "whole30" },
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

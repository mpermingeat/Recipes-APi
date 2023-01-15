const { DietTypes } = require("../db");
const preDietsList = [
  { name: "Gluten Free" },
  { name: "Ketogenic" },
  { name: "Vegetarian" },
  { name: "Lacto-Vegetarian" },
  { name: "Ovo-Vegetarian" },
  { name: "Vegan" },
  { name: "Pescetarian" },
  { name: "Paleo" },
  { name: "Primal" },
  { name: "Low FODMAP" },
  { name: "Whole30" },
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

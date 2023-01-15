const { Router } = require("express");
const getDiets = require("../controllers/dietsControllers");

const dietsRoute = Router();

dietsRoute.get("/", async (req, res) => {
  try {
    const dietsList = await getDiets();

    res.status(200).json(dietsList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = dietsRoute;

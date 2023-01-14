const { Router } = require("express");

const dietsRoute = Router();

dietsRoute.get("/", (req, res) => {
  try {
    const dietsList = getDiets();
    res.status(200).json(dietsList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = dietsRoute;

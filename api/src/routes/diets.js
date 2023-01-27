const { Router } = require("express");
const { getDietsHandler } = require("../handlers/dietsHandlers");

const dietsRoute = Router();

dietsRoute.get("/", getDietsHandler);

module.exports = dietsRoute;

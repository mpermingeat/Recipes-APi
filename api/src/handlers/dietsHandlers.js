const getDiets = require("../controllers/dietsControllers");

const getDietsHandler = async (req, res) => {
  try {
    const dietsList = await getDiets();

    res.status(200).json(dietsList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getDietsHandler,
};

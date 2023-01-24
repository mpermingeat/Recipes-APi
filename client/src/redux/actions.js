export const FILTER_DIETS = "FILTER_DIETS";
export const ADD_RECIPES = "ADD_RECIPES";
export const ADD_DIETS = "ADD_DIETS";
export const ORDER_FILTER = "ORDER_FILTER";
export const ORDER_HEALTHSCORE = "ORDER_HEALTHSCORE";
export const RESET_FILTER = "RESET_FILTER";
const { default: axios } = require("axios");

export const filterDiets = (diet) => {
  return { type: FILTER_DIETS, payload: diet };
};
//-----------Agregar Recetas al global-----------------//
export const addRecipes = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/recipes?title=${name}`
    );
    dispatch({ type: ADD_RECIPES, payload: response.data });
  };
};
//---------------Ordenar el filtro----------------//
export const orderFilter = (value) => {
  return { type: ORDER_FILTER, payload: value };
};
//------------ordenar por healthScore--------------//
export const healthScore = (value) => {
  return { type: ORDER_HEALTHSCORE, payload: value };
};
//------------agregar las recetas--------------//
export const addDiets = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/diets");
    dispatch({ type: ADD_DIETS, payload: response.data });
  };
};
//-------------resetear el filtro------------------//
export const resetFilter = () => {
  return { type: RESET_FILTER };
};
//

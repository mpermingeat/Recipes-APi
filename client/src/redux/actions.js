export const FILTER_DIETS = "FILTER_DIETS";
export const ADD_RECIPES = "ADD_RECIPES";
export const ADD_DIETS = "ADD_DIETS";
export const ORDER_FILTER = "ORDER_FILTER";
export const ORDER_HEALTHSCORE = "ORDER_HEALTHSCORE";
export const RESET_FILTER = "RESET_FILTER";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const SET_FILTER_VALUE = "SET_FILTER_VALUE";
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
//-------------guardar los valores de filtrado-----------//
export const setFilterValue = (key, value) => {
  return { type: SET_FILTER_VALUE, payload: { key, value } };
};
export const deleteRecipe = (id) => {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/recipes/${id}`);
    return dispatch({ type: DELETE_RECIPE, payload: id });
  };
};
//

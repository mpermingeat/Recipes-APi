export const FILTER_DIETS = "FILTER_DIETS";
export const ADD_RECIPES = "ADD_RECIPES";

export const filterDiets = (diet) => {
  return { type: FILTER_DIETS, payload: diet };
};

export const addRecipes = (recipes) => {
  return { type: ADD_RECIPES, payload: recipes };
};

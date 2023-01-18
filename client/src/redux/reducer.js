import { FILTER_DIETS, ADD_RECIPES } from "./actions";
const inicialState = {
  recipes: [],
  filterRecipes: [],
};

export const reducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    case ADD_RECIPES:
      return { ...state, recipes: payload };
    case FILTER_DIETS:
      let filtered = state.recipes.filter((recipe) => {
        return recipe.dataBase
          ? recipe.dietTypes.some((type) => type.name.includes(payload))
          : recipe.diets.includes(payload);
      });
      return { ...state, filterRecipes: filtered };

    default:
      return { ...state };
  }
};

export default reducer;

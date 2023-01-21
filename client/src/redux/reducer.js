import {
  FILTER_DIETS,
  ADD_RECIPES,
  ORDER_FILTER,
  ORDER_HEALTHSCORE,
  ADD_DIETS,
  RESET_FILTER,
} from "./actions";
///

const inicialState = {
  recipes: [],
  filterRecipes: [],
  diets: [],
};

export const reducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    //--------------Agregar recetas al golal-----------------------------//
    case ADD_RECIPES:
      return { ...state, recipes: payload, filterRecipes: payload };
    //--------------filtrar las recetas por dieta-----------------------------//
    case FILTER_DIETS:
      let filtered = state.recipes.filter((recipe) => {
        return recipe.dataBase
          ? recipe.dietTypes.some((type) => type.name.includes(payload))
          : recipe.diets.includes(payload);
      });
      return { ...state, filterRecipes: filtered };
    //--------------Ordenar el filtrado ASC DESC-----------------------------//
    case ORDER_FILTER:
      return {
        ...state,
        filterRecipes: [...state.filterRecipes].sort((a, b) => {
          return payload === "Descendente"
            ? a.title > b.title
              ? -1
              : b.title < a.title
              ? 1
              : 0
            : a.title < b.title
            ? -1
            : b.title > a.title
            ? 1
            : 0;
        }),
        recipes: [...state.recipes].sort((a, b) => {
          return payload === "Descendente"
            ? a.title > b.title
              ? -1
              : b.title < a.title
              ? 1
              : 0
            : a.title < b.title
            ? -1
            : b.title > a.title
            ? 1
            : 0;
        }),
      };
    //--------------Ordenar por el helthScore ASC DESC-----------------------------//
    case ORDER_HEALTHSCORE:
      return {
        ...state,
        filterRecipes: [...state.filterRecipes].sort((a, b) => {
          return payload === "Ascendente"
            ? a.healthScore > b.healthScore
              ? -1
              : b.healthScore < a.healthScore
              ? 1
              : 0
            : a.healthScore < b.healthScore
            ? -1
            : b.healthScore > a.healthScore
            ? 1
            : 0;
        }),
        recipes: [...state.recipes].sort((a, b) => {
          return payload === "Ascendente"
            ? a.healthScore > b.healthScore
              ? -1
              : b.healthScore < a.healthScore
              ? 1
              : 0
            : a.healthScore < b.healthScore
            ? -1
            : b.healthScore > a.healthScore
            ? 1
            : 0;
        }),
      };
    //------------------Agregar dietas al cargar la pag---------------------------------//
    case ADD_DIETS:
      return { ...state, diets: payload };
    //------------------Resetear los filtros---------------------------------//
    case RESET_FILTER: {
      return { ...state, filterRecipes: [...state.recipes] };
    }
    default:
      return { ...state };
  }
};

export default reducer;

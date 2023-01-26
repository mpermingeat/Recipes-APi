import {
  FILTER_DIETS,
  ADD_RECIPES,
  ORDER_FILTER,
  ORDER_HEALTHSCORE,
  ADD_DIETS,
  RESET_FILTER,
  DELETE_RECIPE,
  SET_FILTER_VALUE,
} from "./actions";
///

const inicialState = {
  recipes: [],
  filterRecipes: [],
  diets: [],
  //hashmap de los filtros selecionados
  selectFilter: {},
  //almacenamos los valores de los filtor de los selects
  filterValue: {},
};

export const reducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    //--------------Agregar recetas al golal-----------------------------//
    case ADD_RECIPES:
      return { ...state, recipes: payload, filterRecipes: payload };
    //--------------filtrar las recetas por dieta-----------------------------//
    case FILTER_DIETS:
      //------hashmap donde seteamos los filtros q selecionamos como propiedad en true------//
      const filterSelected = { ...state.selectFilter };
      filterSelected[payload] = true;

      //----definimos un array conm todos los filtros a aplicar----------//
      const FiltersToApply = Object.keys(filterSelected);

      //---variablea auxiliar con resetas-----/
      let auxRecipes = [...state.recipes];
      FiltersToApply.forEach((filter) => {
        auxRecipes = auxRecipes.filter((recipe) => {
          return recipe.dataBase
            ? recipe.dietTypes.some((type) => type.name.includes(filter))
            : recipe.diets.includes(filter);
        });
      });
      return {
        ...state,
        filterRecipes: auxRecipes,
        selectFilter: filterSelected,
      };
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
      };
    //------------------Agregar dietas al cargar la pag---------------------------------//
    case ADD_DIETS:
      return { ...state, diets: payload };

    //------------------Resetear los filtros---------------------------------//
    case RESET_FILTER: {
      return {
        ...state,
        filterRecipes: [...state.recipes],
        filterValue: {},
        selectFilter: {},
      };
    }

    //---------seteamos los valores de los filtros q se aplicaran--------////
    case SET_FILTER_VALUE:
      const { key, value } = payload;
      return { ...state, filterValue: { ...state.filterValue, [key]: value } };

    //-----------------------Caso para Borrar un elemento de la base de datos---------///
    case DELETE_RECIPE: {
      return {
        ...state,
        filterRecipes: state.filterRecipes.filter(
          (recipe) => recipe.id !== payload
        ),
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;

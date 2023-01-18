import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import Card from "../../components/Card/Card";
const { default: axios } = require("axios");

//--------------------//
function Home() {
  //--------Estados locales-------------//
  const [name, setName] = useState("");
  const [filters, setFilters] = useState([]);
  const [flag, setFlag] = useState(true);
  const [errorSearch, setErrorSearch] = useState("");
  const dispatch = useDispatch();

  const recipes = useSelector((state) => {
    return state.recipes;
  });
  const filterRecipes = useSelector((state) => {
    return state.filterRecipes;
  });
  //Funcion para la barra de busqueda
  const onSearch = async (name) => {
    await axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then((response) => {
        dispatch(action.addRecipes(response.data));
      })
      .catch((error) =>
        setErrorSearch(`No se encontro resultados con ${name}`)
      );
  };
  //Funcion para enlazar el input value con el estado y viceversa
  const handleInputSearch = (event) => {
    setName(event.target.value);
  };
  useEffect((event) => {
    async function fetchFilters() {
      let response = await axios.get(`http://localhost:3001/diets`);
      setFilters(response);
    }
    fetchFilters();
  }, []);
  //-------------funcion para los filtros--------------////
  const handleFilter = (e) => {
    dispatch(action.filterDiets(e.target.value));
    e.target.value === "showAll" ? setFlag(true) : setFlag(false);
  };
  ///-------------------HTML-----------------------------///////////
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="">Tipos de dietas: </label>
        <select onChange={handleFilter}>
          {filters?.data ? (
            filters.data.map((e, index) => (
              <option key={index} value={e.name}>
                {e.name}
              </option>
            ))
          ) : (
            <option hidden>filter</option>
          )}
          <option value="showAll">Show All</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Order by: </label>
        <select>
          <option value="1">Asc</option>
          <option value="2">Desc</option>
          <option value="3">Health Score</option>
        </select>
      </div>
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          onChange={handleInputSearch}
          value={name}
        />
        <button onClick={() => onSearch(name)}>Search</button>
      </div>
      <h4>{errorSearch && errorSearch}</h4>
      {flag ? (
        <div>
          {Array.isArray(recipes) ? (
            recipes?.map((e) =>
              e.dataBase ? (
                <Card
                  key={`db${e.id}`}
                  name={e.name}
                  image="https://via.placeholder.com/150"
                  diets={e.dietTypes.map((e) => e.name)}
                />
              ) : (
                <Card
                  key={e.id}
                  name={e.title}
                  image={e.image}
                  diets={e.diets}
                />
              )
            )
          ) : (
            <h3>No hay nada</h3>
          )}
        </div>
      ) : (
        <div>
          {Array.isArray(filterRecipes) ? (
            filterRecipes?.map((e) =>
              e.dataBase ? (
                <Card
                  key={`db${e.id}`}
                  name={e.name}
                  image="https://via.placeholder.com/150"
                  diets={e.dietTypes.map((e) => e.name)}
                />
              ) : (
                <Card
                  key={e.id}
                  name={e.title}
                  image={e.image}
                  diets={e.diets}
                />
              )
            )
          ) : (
            <h3>No hay nada</h3>
          )}
        </div>
      )}

      <div>futura paginacion</div>
    </div>
  );
}

export default Home;

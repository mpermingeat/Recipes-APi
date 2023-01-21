import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import Card from "../../components/Card/Card";
import Pagination from "../../components/pagination/Pagination";

//---------------------------------------------------------//
function Home() {
  //-----------------Estados locales-------------------//
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  /* const filterRecipes = useSelector((state) => {
    return state.filterRecipes;
  }); */
  const diets = useSelector((state) => state.diets);

  //----------Funcion para la barra de busqueda--------------------//
  const onSearch = async (name) => {
    dispatch(action.addRecipes(name));
  };
  //----Funcion para enlazar el input value con el estado y viceversa----//
  const handleInputSearch = (event) => {
    setName(event.target.value);
  };
  //--------Agregar las dietas al estado global---------------//
  useEffect(() => {
    dispatch(action.addDiets());
    dispatch(action.addRecipes(""));
  }, []);
  //-------------funcion para los filtros----------------//
  const handleFilter = (e) => {
    dispatch(action.filterDiets(e.target.value));
  };
  ///----------------funciones para el order----------------//
  const handleOrder = (event) => {
    dispatch(action.orderFilter(event.target.value));
  };
  const handleOrderScore = (event) => {
    dispatch(action.healthScore(event.target.value));
  };
  //-----------------funcion para el resetfilter-------------///////
  const handleReset = () => {
    dispatch(action.resetFilter());
  };

  ///-------------------HTML--------------------------------//
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="">Tipos de dietas: </label>
        <select onChange={handleFilter}>
          {diets.map((e, index) => (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          ))}
          <option value="showAll">Show All</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Order by: </label>
        <select onChange={handleOrder}>
          <option hidden>Order</option>
          <option value="Ascendente">Asc</option>
          <option value="Descendente">Desc</option>
        </select>
        <label htmlFor="">Order by HealthScore; </label>
        <select onChange={handleOrderScore}>
          <option hidden>Helth Score</option>
          <option value="Ascendente">Asc</option>
          <option value="Descendente">Desc</option>
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
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <Pagination></Pagination>
    </div>
  );
}

export default Home;

import styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import Pagination from "../../components/pagination/Pagination";
import FilterDiets from "../../components/FilterDiets/FilterDiets";
import OrderByName from "../../components/OrderByName/OrderByName";
import OrderByScore from "../../components/OrderByScore/OrderByScore";
import Footer from "../../components/Footer/Footer";

//---------------------------------------------------------//
function Home() {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  //--------Agregar las dietas al estado global---------------//
  useEffect(() => {
    dispatch(action.addDiets());
    !recipes.length && dispatch(action.addRecipes(""));
  }, []);

  ///-------------------HTML--------------------------------//
  return (
    <>
      <div className={styles.container}>
        <div className={styles.options}>
          <FilterDiets></FilterDiets>
          <OrderByName></OrderByName>
          <OrderByScore></OrderByScore>
        </div>
        <Pagination></Pagination>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;

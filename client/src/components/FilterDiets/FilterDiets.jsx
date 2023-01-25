import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import styles from "./FilterDiets.module.css";
function FilterDiets() {
  //
  const dispatch = useDispatch();
  //-----------------Estados-------------------//
  const diets = useSelector((state) => state.diets);

  //-------------funcion para los filtros----------------//
  const handleFilter = (e) => {
    dispatch(action.filterDiets(e.target.value));
  };
  //-----------------funcion para el resetfilter-------------///////
  const handleReset = () => {
    document.getElementById("mySelect").value = "showAll";
    document.getElementById("myOrder").value = "Order";
    document.getElementById("myScore").value = "Score";
    dispatch(action.resetFilter());
  };

  return (
    <div className={styles.div}>
      <label className={styles.label} htmlFor="">
        Tipos de dietas:
      </label>
      <select id="mySelect" className={styles.elements} onChange={handleFilter}>
        {diets.map((e, index) => (
          <option className={styles.option} key={index} value={e.name}>
            {e.name}
          </option>
        ))}
        <option className={styles.option} value="showAll">
          Show All
        </option>
      </select>

      <button className={styles.elements} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterDiets;

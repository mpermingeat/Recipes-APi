import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import styles from "./FilterDiets.module.css";
function FilterDiets() {
  //
  const dispatch = useDispatch();
  //-----------------Estados-------------------//
  const diets = useSelector((state) => state.diets);
  const filterValue = useSelector((state) => state.filterValue);

  //-------------funcion para los filtros----------------//
  const handleFilter = (e) => {
    dispatch(action.filterDiets(e.target.value));
    dispatch(action.setFilterValue("filter", e.target.value));
  };
  //-----------------funcion para el resetfilter-------------///////
  const handleReset = () => {
    dispatch(action.resetFilter());
  };

  return (
    <div className={styles.div}>
      <label className={styles.label} htmlFor="">
        Tipos de dietas:
      </label>
      <select
        className={styles.elements}
        onChange={handleFilter}
        value={filterValue.filter ? filterValue.filter : ""}
      >
        <option hidden className={styles.option}>
          filter
        </option>
        {diets.map((e, index) => (
          <option className={styles.option} key={index} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>

      <button className={styles.elements} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterDiets;

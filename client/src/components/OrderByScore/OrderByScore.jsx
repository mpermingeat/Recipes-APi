import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import styles from "./OrderByScore.module.css";
function OrderByScore() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filterValue);
  ///----------------funcion para el order Score----------------//
  const handleOrderScore = (event) => {
    dispatch(action.healthScore(event.target.value));
    dispatch(action.setFilterValue("OrderByScore", event.target.value));
  };
  return (
    <div className={styles.div}>
      <label htmlFor="">Order by HealthScore:</label>
      <select
        className={styles.elements}
        onChange={handleOrderScore}
        value={filterValue.OrderByScore ? filterValue.OrderByScore : ""}
      >
        <option className={styles.option} hidden>
          Score
        </option>
        <option className={styles.option} value="Ascendente">
          Asc
        </option>
        <option className={styles.option} value="Descendente">
          Desc
        </option>
      </select>
    </div>
  );
}

export default OrderByScore;

import { useDispatch } from "react-redux";
import * as action from "../../redux/actions";
import styles from "./OrderByScore.module.css";
function OrderByScore() {
  const dispatch = useDispatch();
  ///----------------funciones para el order----------------//
  const handleOrderScore = (event) => {
    dispatch(action.healthScore(event.target.value));
  };
  return (
    <div className={styles.div}>
      <label htmlFor="">Order by HealthScore:</label>
      <select className={styles.elements} onChange={handleOrderScore}>
        <option hidden>Score</option>
        <option value="Ascendente">Asc</option>
        <option value="Descendente">Desc</option>
      </select>
    </div>
  );
}

export default OrderByScore;

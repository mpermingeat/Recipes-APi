import { useDispatch } from "react-redux";
import * as action from "../../redux/actions";
import styles from "./OrderByName.module.css";
function OrderByName() {
  const dispatch = useDispatch();
  ///----------------funciones para el order----------------//
  const handleOrder = (event) => {
    dispatch(action.orderFilter(event.target.value));
  };
  return (
    <div className={styles.div}>
      <label htmlFor="">Order by: </label>
      <select className={styles.select} onChange={handleOrder}>
        <option hidden>Order</option>
        <option value="Ascendente">Asc</option>
        <option value="Descendente">Desc</option>
      </select>
    </div>
  );
}

export default OrderByName;

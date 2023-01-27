import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import styles from "./OrderByName.module.css";
function OrderByName() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filterValue);
  ///----------------funcion para el order by name----------------//
  const handleOrder = (event) => {
    dispatch(action.orderFilter(event.target.value));
    dispatch(action.setFilterValue("OrderByName", event.target.value));
  };
  return (
    <div className={styles.div}>
      <label htmlFor="">Order by: </label>
      <select
        className={styles.select}
        onChange={handleOrder}
        value={filterValue.OrderByName ? filterValue.OrderByName : ""}
      >
        <option className={styles.option} hidden>
          Order
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

export default OrderByName;

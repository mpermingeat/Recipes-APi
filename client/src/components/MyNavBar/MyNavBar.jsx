import { Link } from "react-router-dom";
import styles from "./MyNavBar.module.css";
function MyNavBar() {
  return (
    <div className={styles.div}>
      <Link className={styles.botones} to="/">
        Log
      </Link>
      <Link className={styles.botones} to="/home">
        Home
      </Link>
      <Link className={styles.botones} to="/create">
        Create Recipe
      </Link>
    </div>
  );
}

export default MyNavBar;

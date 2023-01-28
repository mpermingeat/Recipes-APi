import { Link } from "react-router-dom";
import styles from "./MyNavBar.module.css";
import SearchBar from "../../components/SearhBar/SearchBar";
function MyNavBar() {
  return (
    <div className={styles.div}>
      <Link className={styles.botones} to="/">
        Logo
      </Link>
      <Link className={styles.botones} to="/home">
        Home
      </Link>
      <SearchBar></SearchBar>
      <Link className={styles.botones} to="/create">
        Create
      </Link>
      <Link className={styles.botones} to="/about">
        About
      </Link>
    </div>
  );
}

export default MyNavBar;

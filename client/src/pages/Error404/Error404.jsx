import styles from "./Error404.module.css";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <Link to="/home">
          <p className={styles.error}>Error 404</p>
        </Link>
      </div>
    </div>
  );
}

export default Error404;

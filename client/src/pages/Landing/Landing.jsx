import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <p className={styles.h1}>Welcome </p>
        <p className={styles.h1}> to the </p>
        <p className={styles.h1}> Food Api</p>

        <Link to="/home">
          <button className={styles.button}>Start</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

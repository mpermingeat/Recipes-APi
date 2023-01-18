import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={styles.container}>
      <h1>landing</h1>
      <Link to="/home">
        <button>Iniciar</button>
      </Link>
    </div>
  );
}

export default Landing;

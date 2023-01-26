import styles from "./Error404.module.css";
function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <p className={styles.error}>Error 404</p>
      </div>
    </div>
  );
}

export default Error404;

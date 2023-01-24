import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.div}>
      <p className={styles.text}>Creaty by</p>
      <p className={styles.firma}>Maximiliano Permingeat</p>
      <span className={styles.span}>Henry Bootcamp 2022 - 2023</span>
    </div>
  );
}

export default Footer;

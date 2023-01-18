import styles from "./CreateRecipe.module.css";
function CreateRecipe() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.div}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.div}>
          <label htmlFor="summary">Resumen: </label>
          <textarea id="summary" name="summary"></textarea>
        </div>
        <div className={styles.div}>
          <label htmlFor="healthScore">Health Score: </label>
          <input type="number" id="healthScore" name="healthScore" />
        </div>
        <div className={styles.div}>
          {" "}
          <label>Steps: </label>
          <input type="number" id="steps" name="steps" />
        </div>
        <div className={styles.div}>
          <button type="submit" value="Enviar" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;

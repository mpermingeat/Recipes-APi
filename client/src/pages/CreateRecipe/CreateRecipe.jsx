import Form from "../../components/Form/Form";
import styles from "./CreateRecipe.module.css";
const { default: axios } = require("axios");

function CreateRecipe() {
  //-------------- Manejador del submit del formulario-------------------//
  const handleCreate = (errors, dataForm) => {
    let err = Object.values(errors);
    if (!err.length) {
      axios
        .post("http://localhost:3001/recipes", dataForm)
        .then((res) => alert(res.data))
        .catch((error) => alert(error.message));
    } else {
      alert("Datos incorrectos");
    }
  };
  return (
    <section className={styles.container}>
      <Form handleCreate={handleCreate}></Form>
    </section>
  );
}

export default CreateRecipe;

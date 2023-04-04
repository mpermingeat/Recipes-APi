import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EditRecipe.module.css";
import Validation from "../../components/Form/validation";
import * as action from "../../redux/actions";
const { default: axios } = require("axios");

function EditRecipe(props) {
  const dispatch = useDispatch();
  const { recipe, id, toggleModal } = props;
  const [dataForm, setDataForm] = useState(recipe);
  const [errors, setErrors] = useState({});
  const diets = useSelector((state) => state.diets);

  //-------------- Manejador del submit del formulario-------------------//
  const handleSubmit = (event) => {
    event.preventDefault();
    let err = Object.values(errors);
    dataForm.dietTypes = dataForm.dietTypes.map((elem) => elem.id);
    if (!err.length) {
      axios
        .put(`http://localhost:3001/recipes/${id}`, dataForm)
        .then((res) => console.log("todo bien"))
        .catch((error) => console.log(error.message));
      dispatch(action.addRecipes(""));
      toggleModal();
    } else {
      alert("Datos incorrectos");
    }
  };
  //------------- Manejador de los inputs para validar y setear errores----------//
  const hanbleInputChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    setDataForm({ ...dataForm, [property]: value });
    setErrors(Validation({ ...dataForm, [property]: value }));
  };
  //-----------------Manejador de input de las dietas----------------------///
  const handleDiets = (name, id) => {
    console.log(dataForm.dietTypes);
    const findType = dataForm.dietTypes?.find((elem) => elem.id === id);
    setDataForm({
      ...dataForm,
      dietTypes: !findType
        ? [...dataForm.dietTypes, { id, name }]
        : dataForm.dietTypes.filter((ele) => ele.id !== id),
    });
  };
  const handleDish = (e) => {
    setDataForm({ ...dataForm, dishTypes: e.target.value.split(",") });
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={styles.card}>
      <form className={styles.form} action="" method="post">
        <div className={styles.div}>
          <label className={styles.label} htmlFor="title">
            Title:
          </label>
          <input
            className={styles.input}
            type="text"
            id="title"
            name="title"
            value={dataForm.title}
            onChange={hanbleInputChange}
            required
          />
        </div>
        {errors.title ? <span className={styles.p}>{errors.title}</span> : ""}
        <div className={styles.div}>
          <label className={styles.label} htmlFor="summary">
            Resumen:
          </label>
          <textarea
            className={styles.textarea}
            id="summary"
            name="summary"
            value={dataForm.summary}
            onChange={hanbleInputChange}
            required
          ></textarea>
        </div>
        {errors.summary ? <p className={styles.p}>{errors.summary}</p> : ""}
        <div className={styles.div}>
          <label className={styles.label} htmlFor="healthScore">
            Health Score:{" "}
          </label>
          <input
            className={styles.input}
            type="number"
            id="healthScore"
            name="healthScore"
            value={dataForm.healthScore}
            onChange={hanbleInputChange}
            required
          />
        </div>
        {errors.healthScore ? (
          <p className={styles.p}>{errors.healthScore}</p>
        ) : (
          ""
        )}
        <div className={styles.div}>
          <label className={styles.label} htmlFor="steps">
            Steps:
          </label>
          <textarea
            className={styles.textarea}
            id="steps"
            name="steps"
            value={dataForm.steps}
            onChange={hanbleInputChange}
          ></textarea>
        </div>
        {errors.steps ? <p className={styles.p}>{errors.steps}</p> : ""}
        <div className={styles.divDiets}>
          {diets.map((diet) => {
            return (
              <>
                <label className={styles.label} key={diet.name}>
                  {diet.name}
                </label>
                <input
                  type="checkbox"
                  name={diet.name}
                  key={diet.id}
                  checked={dataForm.dietTypes.some((obj) => obj.id === diet.id)}
                  onChange={() => handleDiets(diet.name, diet.id)}
                />
              </>
            );
          })}
        </div>
        <div className={styles.div}>
          <label className={styles.label} htmlFor="dishTypes">
            Dish types:
          </label>
          <input
            className={styles.input}
            id="dishTypes"
            name="dishTypes"
            value={dataForm.dishTypes.join()}
            onChange={handleDish}
          ></input>
        </div>
        <div className={styles.div}>
          <button
            className={styles.submit}
            type="submit"
            value="Enviar"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditRecipe;

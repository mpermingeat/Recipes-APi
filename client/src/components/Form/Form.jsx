import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Form.module.css";
import Validation from "./validation";
import * as action from "../../redux/actions";
const { default: axios } = require("axios");

function Form() {
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    title: "",
    summary: "",
    healthScore: null,
    steps: "",
    dietsTypes: [],
    dishTypes: [],
  });
  const [errors, setErrors] = useState({});
  const diets = useSelector((state) => state.diets);
  //-------------- Manejador del submit del formulario-------------------//
  const handleSubmit = (event) => {
    event.preventDefault();
    let err = Object.values(errors);
    if (!err.length) {
      axios
        .post("http://localhost:3001/recipes", dataForm)
        .then((res) => console.log("todo bien"))
        .catch((error) => console.log(error.message));
      setDataForm({
        title: "",
        summary: "",
        healthScore: null,
        steps: "",
        dietsTypes: [],
        dishTypes: [],
      });
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
  const handleDiets = (e) => {
    const findType = dataForm.dietsTypes.find((elem) => elem === e.target.name);
    setDataForm({
      ...dataForm,
      dietsTypes: !findType
        ? [...dataForm.dietsTypes, e.target.name]
        : dataForm.dietsTypes.filter((ele) => ele !== e.target.name),
    });
  };
  const handleDish = (e) => {
    setDataForm({ ...dataForm, dishTypes: e.target.value.split(",") });
  };

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
            Steps:{" "}
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
                  name={diet.id}
                  key={diet.id}
                  onChange={handleDiets}
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
            className={styles.textarea}
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

export default Form;

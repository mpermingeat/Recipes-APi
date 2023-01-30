import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import * as action from "../../redux/actions";
import styles from "./DetailRecipe.module.css";
const { default: axios } = require("axios");

function DetailRecipe() {
  const [recipe, setRecipe] = useState({});
  const { id, dataBase } = useParams();
  const dispatch = useDispatch();
  const { push } = useHistory();

  //---------------obtenemos el detalle de la receta--------------////
  const getRecipe = async (id, dataBase) => {
    const response = await axios
      .get(`http://localhost:3001/recipes/${id}/${dataBase}`)
      .then((res) => setRecipe(res.data));
    return response;
  };
  //------------Manejamos la eliminacion de la receta y redirigimos al user------//////
  const handleDelete = (id) => {
    dispatch(action.deleteRecipe(id));
    dispatch(action.addRecipes(""));
    push("/home");
  };

  useEffect(() => {
    getRecipe(id, dataBase);
  }, []);
  //-----------Funcion para eleminar las etiquetas html que vienen con el texto----////
  const parseoHtml = (text) => {
    const pattern = /<[^>]*>/gi;
    return text?.replace(pattern, "");
  };
  const auxFlag = Object.keys(recipe);

  return (
    <>
      <div className={styles.div}>
        {!auxFlag.length ? (
          <span className={styles.loader}></span>
        ) : (
          <>
            <div className={styles.header}>
              <img
                className={styles.img}
                src={
                  recipe.image
                    ? recipe.image
                    : "https://via.placeholder.com/150"
                }
                alt=""
              />
              <h1 className={styles.h1}>{recipe.title}</h1>
            </div>
            <div className={styles.summary}>
              <h3>Summary</h3>
              <p className={styles.p}>{parseoHtml(recipe?.summary)}</p>
              <h3 className={styles.p}>HealtScore: {recipe?.healthScore}</h3>
            </div>
            <div className={styles.divTags}>
              <div className={styles.tags}>
                {recipe.dataBase
                  ? recipe.dietTypes?.map((element) => {
                      return (
                        <span className={styles.span}>{element.name}</span>
                      );
                    })
                  : recipe.diets?.map((element) => (
                      <span className={styles.span}>{element}</span>
                    ))}
              </div>
              {recipe.dishTypes ? (
                <div className={styles.tags}>
                  {recipe.dishTypes?.map((element) => (
                    <span className={styles.span}>{element}</span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={styles.summary}>
              <h2>Instructions</h2>
              <p className={styles.steps}>
                {recipe.instructions
                  ? parseoHtml(recipe?.instructions)
                  : parseoHtml(recipe?.steps)}
              </p>
            </div>

            {recipe.dataBase ? (
              <div className={styles.divButtons}>
                <button className={styles.buttons} onClick={() => {}}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(recipe.id)}
                  className={styles.buttons}
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      <Footer className={styles.footer}></Footer>
    </>
  );
}

export default DetailRecipe;

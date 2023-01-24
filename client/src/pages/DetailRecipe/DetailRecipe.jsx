import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./DetailRecipe.module.css";
const { default: axios } = require("axios");

function DetailRecipe() {
  const [recipe, setRecipe] = useState({});
  const { id, dataBase } = useParams();

  const getRecipe = async (id, dataBase) => {
    const response = await axios
      .get(`http://localhost:3001/recipes/${id}/${dataBase}`)
      .then((res) => setRecipe(res.data));
    return response;
  };

  useEffect((t) => {
    getRecipe(id, dataBase);
  }, []);

  const parseoHtml = (text) => {
    const pattern = /<[^>]*>/gi;
    return text?.replace(pattern, "");
  };

  return (
    <div className={styles.div}>
      <img className={styles.img} src={recipe.image} alt="" />
      <h1>{recipe.title}</h1>
      <p className={styles.p}>{parseoHtml(recipe?.summary)}</p>
      <h2>Instructions</h2>
      <p className={styles.steps}>
        {recipe.instructions
          ? parseoHtml(recipe?.instructions)
          : parseoHtml(recipe?.steps)}
      </p>
    </div>
  );
}

export default DetailRecipe;

import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Pagination.module.css";
function Pagination(props) {
  const [page, setPage] = useState(1);
  //-------------Traemos las recetas----------------//
  const recipes = useSelector((state) => state.recipes);
  const filterRecipes = useSelector((state) => state.filterRecipes);
  //-----calculamos las paginas necesarias en base a la cantidad de card----------//
  const amount = 6;
  const totalPages = Math.ceil(recipes.length / amount);
  //-----------calculamos cuales son las q se muestran---------//
  const paginated = filterRecipes?.slice((page - 1) * amount, page * amount);

  //--------Manejador de las paginas---------////
  const handlePage = (event) => {
    setPage(event.target.value);
  };
  const indexButton = [];
  for (let i = 1; i <= totalPages; i++) {
    indexButton.push(i);
  }

  return (
    <>
      <div>
        {indexButton.map((element) => (
          <button onClick={handlePage} value={element}>
            {element}
          </button>
        ))}
      </div>
      <div className={styles.cardsContainer}>
        {paginated?.map((e) =>
          e.dataBase ? (
            <Card
              key={`db${e.id}`}
              name={e.title}
              image="https://via.placeholder.com/150"
              diets={e.dietTypes.map((e) => e.name)}
            />
          ) : (
            <Card key={e.id} name={e.title} image={e.image} diets={e.diets} />
          )
        )}
      </div>
    </>
  );
}

export default Pagination;

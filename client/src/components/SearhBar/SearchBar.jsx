import { useDispatch } from "react-redux";
import { useState } from "react";
import * as action from "../../redux/actions";
import styles from "./SearchBar.module.css";
function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  //----------Funcion para la barra de busqueda--------------------//
  const onSearch = async (name) => {
    dispatch(action.addRecipes(name));
  };
  //----Funcion para enlazar el input value con el estado y viceversa----//
  const handleInputSearch = (event) => {
    setName(event.target.value);
  };
  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="text"
        name="search"
        onChange={handleInputSearch}
        value={name}
      />
      <button
        name="search"
        className={styles.button}
        onClick={() => onSearch(name)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

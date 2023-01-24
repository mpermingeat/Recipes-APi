import styles from "./Card.module.css";
import barraDivisora from "../../assets/img/barraDivisora.png";
import { Link } from "react-router-dom";
function Card(props) {
  const { diets } = props;
  return (
    <Link className={styles.link} to={`/detail/${props.id}/${props.dataBase}`}>
      <article className={styles.food_card}>
        <div className={styles.food_img}>
          <div className={styles.divImg}>
            <img src={props.image} alt="" />
          </div>
        </div>
        <div className={styles.food_info}>
          <div className={styles.food_info_name}>
            <p>{props.name}</p>
          </div>
          <div className={styles.separador}>
            <img src={barraDivisora} alt="" />
          </div>
          <div className={styles.food_diets}>
            <div>
              <h3>Tipo de dietas: </h3>
            </div>
            <div>
              {diets.map((element, index) => (
                <span key={index}>{element}, </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Card;

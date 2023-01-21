import styles from "./Card.module.css";
function Card(props) {
  const { diets } = props;
  return (
    <article className={styles.food_card}>
      <div className={styles.food_img}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.food_info}>
        <div className={styles.food_info_name}>
          <h3>{props.name}</h3>
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
  );
}

export default Card;

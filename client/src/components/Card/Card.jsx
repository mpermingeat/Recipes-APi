function Card(props) {
  const { diets } = props;
  return (
    <section>
      <article>
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h4>Tipo de dietas: </h4>
          {diets.map((element, index) => (
            <span key={index}>{element}, </span>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Card;

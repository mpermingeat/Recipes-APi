import styles from "./About.module.css";
import Footer from "../../components/Footer/Footer";
function About() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.summary}>
          <h2>SPA "API FOOD"</h2>
          <p className={styles.p}>
            Este fue un proyecto individual desarrollado durante el bootcamp de
            programación full stack de Henry. Este proyecto me permitió aplicar
            y consolidar los conocimientos adquiridos a lo largo del curso,
            combinando diferentes módulos y herramientas para crear una
            experiencia completa para el usuario.
          </p>
          <p className={styles.p}>
            En la pagina, encontrarás recetas de una amplia variedad de
            categorías, como carnes, pescados, vegetales, postres y más. Además,
            cuenta con una función de búsqueda por nombre para que puedas
            encontrar fácilmente la receta que estás buscando. También ofrecemos
            la posibilidad de filtrar las recetas por tipo de dieta, como
            vegana, sin gluten, baja en carbohidratos, entre otras, y ordenar
            las recetas por nombre y healthScore.
          </p>
          <p className={styles.p}>
            La base de datos se alimenta tanto con una base de datos propia como
            con una API externa para poder ofrecer una gran variedad de recetas.
            Además, cuenta con una función de creación y eliminación de recetas
            propias, para que puedas compartir tus recetas favoritas con la
            comunidad.
          </p>
          <p className={styles.p}>
            Desde el diseño de la interfaz de usuario con React y Redux, hasta
            el manejo de la base de datos con PostgreSQL y Sequelize, este
            proyecto fue una oportunidad para poner en práctica los
            conocimientos adquiridos durante el curso. También tuve la
            oportunidad de trabajar con una API externa y combinar los datos
            obtenidos con nuestra base de datos propia. Además,me permitió
            desarrollar mis habilidades en JavaScript, HTML y CSS, y crear una
            experiencia de usuario fluida y fácil de usar. También tuve la
            oportunidad de trabajar con herramientas como Express y Sequelize
            para crear una aplicación completa.
          </p>
          <p className={styles.p}>
            En resumen, el proyecto "API FOOD" fue una gran oportunidad para
            aplicar y consolidar los conocimientos adquiridos durante el
            bootcamp de programación full stack de Henry, y para desarrollar
            habilidades en una variedad de herramientas y tecnologías. Estoy
            orgullo del resultado final y espero continuar aprendiendo y
            mejorando en el futuro.
          </p>
          <br />
          <p>Atentamente, Maximiliano Permingeat, desarrollador full stack.</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;

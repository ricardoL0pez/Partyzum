import styles from './landing.module.css';
import NavBar from "../../components/Landing/NavBar/NavBar";
import Signin from "../../components/Landing/Signin/Signin";

const Landing = () => {
  return (
    <>
      <NavBar />
      
      {/* Seccion Hero */}
      <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>¡Convierte tus Conversaciones en Acciones!</h1>
          <p>Descubre nuestra innovadora aplicación de mensajería con pagos integrados a través de Bizum. Organiza reuniones, fiestas y más, todo mientras realizas transacciones seguras en un solo lugar.</p>
          <button>Inicia sesión</button>
        </div>

        <div className={styles.formContainer}>

      <Signin />
        </div>

      </section>

    </>
  );
};

export default Landing;
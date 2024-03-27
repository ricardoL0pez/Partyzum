import styles from './textHero.module.scss';


const TextHero = () => {
  return (
    <div className={styles.wrapper}>
      <h1>¡Convierte <br />tus conversaciones <br />en acciones!</h1>
      <br />
      <div>
        <p>Descubre nuestra innovadora aplicación de mensajería con pagos integrados a través de Bizum. Organiza reuniones, fiestas y más, todo mientras realizas transacciones seguras en un solo lugar.</p>
        <br />
        <button className={styles.button}>Inicia sesión</button>

      </div>
    </div>
  );
};

export default TextHero;
import styles from './textHero.module.scss';


const TextHero = () => {
  return (
    <div className={styles.textContainer}>
                    <h1>¡Convierte tus Conversaciones en Acciones!</h1>
                    <p>Descubre nuestra innovadora aplicación de mensajería con pagos integrados a través de Bizum. Organiza reuniones, fiestas y más, todo mientras realizas transacciones seguras en un solo lugar.</p>
                    <button className={styles.button}>Inicia sesión</button>
                </div>
  );
};

export default TextHero;
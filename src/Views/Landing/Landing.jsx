import { useState } from 'react';
import styles from './landing.module.scss';
import NavBar from "../../components/Landing/NavBar/NavBar";
import Signin from "../../components/Landing/Signin/Signin";

const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (menuState) => {
        setIsMenuOpen(menuState); // Actualizar el estado del menú
    }

    return (
        <>
            <NavBar onMenuToggle={handleMenuToggle} />
            {/* Seccion Hero */}
            <section className={styles.heroContainer}>
                <div className={`${styles.textContainer} ${isMenuOpen ? styles.hide : ''}`}>
                    <h1>¡Convierte tus Conversaciones en Acciones!</h1>
                    <p>Descubre nuestra innovadora aplicación de mensajería con pagos integrados a través de Bizum. Organiza reuniones, fiestas y más, todo mientras realizas transacciones seguras en un solo lugar.</p>
                    <button className={styles.button}>Inicia sesión</button>
                </div>
                <div className={` ${isMenuOpen ? styles.hide : ''}`}>
                    <Signin />
                </div>
            </section>
        </>
    );
};

export default Landing;

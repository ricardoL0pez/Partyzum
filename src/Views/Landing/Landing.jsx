import { useState } from 'react';
import styles from './landing.module.scss';
import NavBar from "../../components/Landing/NavBar/NavBar";
import Signin from "../../components/Landing/Signin/Signin";
import Slider from '../../components/Landing/Slider/Slider';

const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (menuState) => {
        setIsMenuOpen(menuState); // Actualizar el estado del menú
    }

    return (
        <>
            <NavBar onMenuToggle={handleMenuToggle} />
            {/* hero section */}
            <section className={styles.hero_wrapper}>
                {/* <div className={`${styles.textContainer} ${isMenuOpen ? styles.hide : ''}`}> */}
                <div className={styles.textContainer}>
                    <h1>¡Convierte tus Conversaciones en Acciones!</h1>
                    <p>Descubre nuestra innovadora aplicación de mensajería con pagos integrados a través de Bizum. Organiza reuniones, fiestas y más, todo mientras realizas transacciones seguras en un solo lugar.</p>
                    <button className={styles.button}>Inicia sesión</button>
                </div>
                <div className={` ${styles.signin}${isMenuOpen ? styles.hide : ''}`}>
                    <h4>¡Convierte tus Conversaciones en Acciones!</h4>
                    <Signin />
                </div>
            </section>

            {/* characteristics section slider */}
            <Slider />
        </>
    );
};

export default Landing;

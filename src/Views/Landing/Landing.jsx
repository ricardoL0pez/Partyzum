import { useState } from 'react';
import styles from './landing.module.scss';
import NavBar from "../../components/Landing/NavBar/NavBar";
import Signin from "../../components/Landing/Signin/Signin";
import Slider from '../../components/Landing/Slider/Slider';
import CallToAction from '../../components/Landing/CTA/CallToAction';
import Contact from '../../components/Landing/Contact/Contact';

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

            <CallToAction />
{/* contact section */}
            <section className={styles.contact_section}>

                <div className={styles.flex_item1}>
                    <h2>Contacto</h2>
                    <div>
                    <p>info@partyzum.com</p>
                    <p> Phone: +34 600 0000</p>
                    </div>
                    
                </div>

                <div className={styles.flex_item2}>
                    <Contact />
                </div>
            </section>

        </>
    );
};

export default Landing;

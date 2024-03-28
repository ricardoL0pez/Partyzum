import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styles from './landing.module.scss';
import { HiOutlineMail, HiOutlineMailOpen, HiOutlinePhone, HiPhone } from "react-icons/hi";
import NavBar from "../../components/Landing/NavBar/NavBar";
import TextHero from '../../components/Landing/TextHero/TextHero';
import Signin from "../../components/Landing/Signin/Signin";
import Slider from '../../components/Landing/Slider/Slider';
import CallToAction from '../../components/Landing/CTA/CallToAction';
import Contact from '../../components/Landing/Contact/Contact';
import Footer from '../../components/Landing/Footer/Footer';
import circles from '../../assets/image/circles.svg';
import thunder from '../../assets/image/thunder.svg';
import donut from '../../assets/image/donut.svg';
import rocket from '../../assets/image/rocket.svg';


const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [iconHovered, setIconHovered] = useState(false);
    const [iconHoveredPhone, setIconHoveredPhone] = useState(false);

    const circlesRef = useRef(null);
    const thunderRef = useRef(null);
    const donutRef = useRef(null);
    const rocketRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            const rotation = value / (window.innerHeight / 90);
            circlesRef.current.style.transform = `rotate(${rotation}deg)`;
            thunderRef.current.style.top = `${value * 1.05}px`;
            donutRef.current.style.transform = `scale(${1 + value / 3000})`;
            donutRef.current.style.transform = `rotate(${rotation}deg)`;
            donutRef.current.style.opacity = `${1 - (value / 1000)}`;
            rocketRef.current.style.transform = `scale(${1 - value / 1000})`;
            rocketRef.current.style.bottom = `${value * -10.05}px`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = (menuState) => {
        setIsMenuOpen(menuState); // Actualizar el estado del menú
        setShowMenu(menuState);
    }

    return (
        <>
            <NavBar onMenuToggle={handleMenuToggle} showMenu={showMenu} />

            <section className={styles.backSection}>
                <img className={styles.circle} src={circles} alt="circles" ref={circlesRef} />
                <img className={styles.thunder} src={thunder} alt="thunder" ref={thunderRef} />
                <img className={styles.donut} src={donut} alt="donut" ref={donutRef} />
                {/* <img className={styles.rocket} src={rocket} alt="rocket" ref={rocketRef} /> */}
            </section>

            {/* hero section */}
            <section className={`${styles.hero_section} ${showMenu ? styles.hide : ''}`}>

                <TextHero />

                {/* <div className={` ${styles.signin}${isMenuOpen ? styles.hide : ''}`}>
                    <h4 className={styles.h4}>¡Convierte tus Conversaciones <br />en Acciones!</h4>
                    <Signin />
                </div>  */}

                <div className={styles.signin}>
                    <h4>¡Convierte tus Conversaciones <br />en Acciones!</h4>

                    <Signin />
                </div>

            </section>





            {/* characteristics section slider */}
            <div id="characteristics" className={styles.characteristics_section}>
                <Slider />
            </div>

            <div className={styles.callToAction_section}>
                <CallToAction />
            </div>

            {/* contact section */}
            <section id='contact' className={styles.contact_section}>

                <div className={styles.contact_info}>
                    <h2>Contacto</h2>

                    <div>
                        {iconHovered ? <HiOutlineMailOpen /> : <HiOutlineMail />}
                        <a
                            href="#"
                            onMouseEnter={() => setIconHovered(true)}
                            onMouseLeave={() => setIconHovered(false)}
                        >
                            info@partyzum.com
                        </a>
                    </div>

                    <div>
                        {iconHoveredPhone ? <HiPhone /> : <HiOutlinePhone />}
                        <a
                            href="#"
                            onMouseEnter={() => setIconHoveredPhone(true)}
                            onMouseLeave={() => setIconHoveredPhone(false)}
                        >
                            +34 600 0000
                        </a>
                    </div>
                </div>

                <div className={styles.contact_form}>
                    <Contact />
                </div>

            </section>

            <div className={styles.footer_section}>
                <Footer />
            </div>



        </>
    );
};

export default Landing;

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header className={styles.wrapper}>

            <div className={styles.brand}>
                <h3 className={styles.h3}>NavBar <span className={styles.span}>CSS Modules</span></h3>
            </div>

            <div className={styles.menu}>
                
                <nav className={`${styles.nav} ${showMenu ? styles.navResponsive : ''}`}>
                
                    <a className={styles.a} href="/#">¿Cómo funciona?</a>
                    <a className={styles.a} href="/#">Contacto</a>
                    <button className={styles.signInBtn}>Inicia sesión</button>

                    <button className={styles.faTimes} onClick={handleClick}>
                        <FaTimes />
                    </button>
                </nav>

                <button className={styles.faBars} onClick={handleClick}>
                    <FaBars />
                </button>
            </div>

        </header>
    );
};

export default NavBar;



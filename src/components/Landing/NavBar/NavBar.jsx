import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.scss';

const NavBar = ({ onMenuToggle }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
        onMenuToggle(!showMenu); // Pasar el estado del menú al componente padre
    }
    return (
        <header className={styles.wrapper}>

            <div className={styles.brand}>
                <h3 className={styles.h3}>NavBar <span className={styles.span}>CSS Modules</span></h3>
            </div>

            <div className={styles.menu}>
                
                <nav className={`${styles.nav} ${showMenu ? styles.navResponsive : ''}`}>
                
                    <a href="/#">¿Cómo funciona?</a>
                    <a href="/#">Contacto</a>
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


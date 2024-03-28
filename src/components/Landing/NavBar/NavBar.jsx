import { useState } from 'react';
import styles from './navbar.module.scss';
import logo from '../../../assets/icons/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = ({ onMenuToggle }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
        onMenuToggle(!showMenu); // Pasar el estado del menú al componente padre
    }



    return (
        <header className={styles.wrapper}>

            <div className={styles.brand}>
                <img src={logo} alt="logo partyzumm" />
            </div>

            <div className={styles.menu}>

                <nav className={`${styles.nav} ${showMenu ? styles.navResponsive : ''}`}>

                    <a href="/#characteristics">¿Cómo funciona?</a>
                    <a href="/#contact">Contacto</a>
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



import React from 'react';
import styles from './footer.module.scss';
import { TiSocialFacebookCircular } from "react-icons/ti";


const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>

            <div className={styles.footerMenuContainer}>
                <ul>
                    <li>
                        <a className={styles.a} href=''>Ayuda</a>
                    </li>
                    <li>
                        <a className={styles.a} href=''>Terminos y condiciones</a>
                    </li>
                    <li>
                        <a className={styles.a} href=''>Politicas de privacidad</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Front-End Developer</p>
                    </li>
                   
                   
                   
                    <li>
                        <a href="https://www.linkedin.com/in/josericardolopezsierra/" target="_blank" rel="noopener noreferrer">Ricardo López</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Back-End Developer</p>
                    </li>
                   
                   
                    
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">Tiago Souza</a>
                    </li>
                </ul>
                <ul>

                    <div className={styles.footerRedesContainer}>
                        <p>Tecnologías</p>
                        <div>
                            <TiSocialFacebookCircular/>
                            <TiSocialFacebookCircular/>
                            <TiSocialFacebookCircular/>
                        </div>
                    </div>

                </ul>
            </div>

        </footer>
    );
};

export default Footer;
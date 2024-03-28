import React, { useEffect, useRef } from 'react';
import styles from "./callToAction.module.scss";
import chat from '../../../assets/image/chat.svg';

const CallToAction = () => {
  const chatRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        const value = window.scrollY;
    
        chatRef.current.style.transform = `scale(${2 - value / 1200})`;
        
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <section className={styles.wrapper}>
    
    <img className={styles.chat} src={chat} alt="chat" ref={chatRef} />
      <h2>Llamado a la acción</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vitae laudantium unde sint quibusdam error, nam eligendi cum cumque in officia? Autem dolorem soluta reprehenderit.</p>
      <button>Registrate</button>
    </section>
    
  );
};

export default CallToAction;
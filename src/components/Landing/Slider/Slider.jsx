// Slider.jsx
import { useState } from 'react';
import styles from './slider.module.scss';
import video from '../../../assets/icons/video.png';

const Slider = () => {
   /*  const [slideIndex, setSlideIndex] = useState(0);

    const handlePrevSlide = () => {
        setSlideIndex(prevIndex => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setSlideIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
    }; */

    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlideChange = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slides} style={{ transform: `translateX(-${slideIndex * 80}vw)` }}>
                {/* Slider1 */}
                <div className={styles.slider_container}>
                <section className={styles.characteristics_wrapper}>
                    <div className={styles.textContainer}>
                        <h2>Sección <br />características</h2>
                        <br /><p className={styles.pp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates debitis, magni iste quis vitae doloremque et deserunt rem, repellat accusamus repudiandae minus. Odio unde cum, error harum exercitationem porro?</p>
                        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates debitis, magni iste quis vitae doloremque et deserunt rem.</p>
                    </div>
                    <div className={styles.video}>
                        <img src={video} alt="" />
                    </div>
                </section>
                </div>
                
                <div className={styles.slider_container}>
                <section className={styles.characteristics_wrapper}>
                    <div className={styles.textContainer}>
                        <h2>Sección <br />características</h2>
                        <br /><p className={styles.pp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates debitis, magni iste quis vitae doloremque et deserunt rem, repellat accusamus repudiandae minus. Odio unde cum, error harum exercitationem porro?</p>
                        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates debitis, magni iste quis vitae doloremque et deserunt rem.</p>
                    </div>
                    <div className={styles.video}>
                        <img src={video} alt="" />
                    </div>
                </section>
                </div>

                <div className={styles.slider_container}>
                <section className={styles.characteristics_wrapper}>
                    <div className={styles.textContainer}>
                        <h2>Sección <br />características</h2>
                        <br /><p className={styles.pp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates debitis, magni iste quis vitae doloremque et deserunt rem, repellat accusamus repudiandae minus. Odio unde cum, error harum exercitationem porro?</p>
                        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates debitis, magni iste quis vitae doloremque et deserunt rem.</p>
                    </div>
                    <div className={styles.video}>
                        <img src={video} alt="" />
                    </div>
                </section>
                </div>

            </div>

            {/* <button className={styles.prevButton} onClick={handlePrevSlide}>Prev</button>
            <button className={styles.nextButton} onClick={handleNextSlide}>Next</button> */}
            <div className={styles.sliderControls}>
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        className={`${styles.slideControl} ${slideIndex === index ? styles.active : ''}`}
                        onClick={() => handleSlideChange(index)}
                    />
                ))}
            </div>

        </div>
    );
};

export default Slider;

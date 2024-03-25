import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./contact.module.scss";
import { messages, patterns } from "./validation";
import logo from '../../../assets/icons/logo.png'


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (userInfo) => {
        console.log(userInfo);
    };

    return (
        <div className={styles.wrapper}>
             <img src={logo} alt="" /> 
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* mail */}
                    <label htmlFor="mail">Correo electrónico</label>
                    <input
                        {...register("mail", {
                            required: messages.req,
                            pattern: {
                                value: patterns.mail,
                                message: messages.mail
                            }
                        })}
                        id="mail"
                        name="mail"
                        type="email"
                        placeholder="email@mail.com"
                        aria-label="Ingresa un correo electrónico"
                        aria-required="true"
                        className={`${styles.input} ${errors.mail ? styles.errorInput : styles.successInput}`}
                    />
                    {errors.mail && <p className={styles.errorForm}>{errors.mail.message}</p>}
                {/* fullName */}
                    <label htmlFor="fullName">Nombre completo</label>
                    <input
                        {...register("fullName", {
                            required: messages.reqFullName,
                            pattern: {
                                value: patterns.fullName,
                                message: messages.fullName
                            }
                        })}
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Nombre completo"
                        aria-label="Nombre completo"
                        aria-required="true"
                        autoCapitalize="off"
                        className={`${styles.input} ${errors.fullName ? styles.errorInput : styles.successInput}`}
                    />
                    {errors.fullName && <p className={styles.errorForm}>{errors.fullName.message}</p>}
                {/* Text */}
                    <label htmlFor="message">Mensaje</label>
                    <input
                        {...register("message", {
                            required: messages.reqMessage,
                            minLength: {
                                value: 150,
                                message: messages.lengthMessageMin
                            },
                            maxLength: {
                                value: 550,
                                message: messages.lengthMessageMax
                            },
                            pattern: {
                                value: patterns.message,
                                message: messages.message
                            }
                        })}
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Escribe tu mensaje aquí"
                        aria-label="Escribe tu mensaje aquí"
                        aria-required="true"
                        className={`${styles.input} ${errors.message ? styles.errorInput : styles.successInput}`}
                    />
                    {errors.message && <p className={styles.errorForm}>{errors.message.message}</p>}
                {/* button */}
                <br />
                <div className={styles.btn_send}>
                    <button>
                        Enviar
                    </button>
                </div>

            </form>

        </div>
    );
};

export default Contact;


import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Signin.module.css";
import { messages, patterns } from "./ValidationSignin";

const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (userInfo) => {
        console.log(userInfo);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.wrapper}>

            <h2>Registrate</h2>
            <p>Se parte de nuestra comunidad</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* phone */}
                <div className={styles.inputWrapper}>
                    <label htmlFor="phone"></label>
                    <input
                        {...register("phone", {
                            required: messages.req,
                            minLength: {
                                value: 9,
                                message: messages.lengthPhone
                              },
                              maxLength: {
                                value: 9,
                                message: messages.lengthPhone
                              },
                            pattern: {
                                value: patterns.phone,
                                message: messages.phone
                            }
                        })}
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+34"
                        aria-label="Número de teléfono"
                        aria-required="true"
                        defaultValue="+34"
                        className={styles.input}
                    />
                    {errors.phone && <p className={styles.errorForm}>{errors.phone.message}</p>}
                </div>
                {/* fullName */}
                <div className={styles.inputWrapper}>
                    <label htmlFor="fullName"></label>
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
                        className={styles.input}
                    />
                    {errors.fullName && <p className={styles.errorForm}>{errors.fullName.message}</p>}
                </div>
                {/* password */}
                    <div className={styles.inputWrapper}>
                        <div className={styles.password}>
                        <input
                            {...register("password", {
                                required: messages.req,
                                pattern: {
                                    value: patterns.password,
                                    message: messages.password
                                }
                            })}
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Constraseña"
                            className={styles.input}
                        />
                        <div
                            onClick={handleTogglePassword}
                            className={showPassword ? styles.hidePassword : styles.showPassword}
                        ></div>
                        </div>
                        
                        <div>
                            {errors.password && <p className={styles.errorForm}>{errors.password.message}</p>}
                        </div>
                        
                    </div>
                {/* </div> */}
                <br />
                <button  className={styles.button} >
                    Registrate
                </button>
            </form>
            <p>O</p>
            <button className={styles.button}>
                Gmail
            </button>
            <br />
            <p>Al registrarte, aceptas nuestros <span className={styles.span}><a href="#">Terminos y Condiciones</a></span> y <span className={styles.span}><a href="#">Políticas de privacidad</a></span><div className=""></div></p>
            <br />
            <p>¿Ya estas registrado? <span className={styles.span}><a href="#">Inicia sesión</a></span></p>

        </div>
    );
};

export default Signin;
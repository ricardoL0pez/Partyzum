export const messages = {
    req: "Este campo es obligatorio",
    reqFullName: "Ingresá tu nombre completo",
    phone: "Debes introducir un número de teléfono válido",
    lengthPhone:"El número de telefono debe contener 9 digitos",
    fullName: "El formato introducido no es el correcto",
    password: "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, una minúscula y una mayúscula."
};

export const patterns = {
    phone: /^(?:(?:\+|00)34)?(?:6\d{8}|7\d{8})$/,

    fullName: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/,

    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
};
export const messages = {
    req: "Este campo es obligatorio",
    mail: "Debes introducir un correo electrónico valido",
    reqFullName: "Ingresá tu nombre completo",
    fullName: "Verifica tu nombre completo",
    message: "Caracteres invalidos",
    lengthMessageMin:"El mensaje es demasiado corto",
    lengthMessageMax:"El mensaje es demasiado extenso",
};

export const patterns = {
    mail: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    fullName: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/,
    text:/^[a-zA-ZáéíóúüñÑÁÉÍÓÚÜ\s\.,;:!¡¿?()-]+$/u,

};


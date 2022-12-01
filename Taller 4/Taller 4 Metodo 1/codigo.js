const formulario = document.getElementById("form")
const error = document.getElementById("Mensaje_error");
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    id: /^[0-9]{1,11}$/,
    id_pais: /^[0-9]{1,3}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,25}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /cll|cra|av|anv|trans/,
    cedula: /^[0-9]{10,20}$/,
    contraseña: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#%/&])(?!\s)[a-zA-Z0-9#%/&]{15,20}$/,
    telefono: /^[0-9]{5,10}$/
}

const campos = {
    id: false,
    id_pais: false,
    nombre: false,
    apellido: false,
    email: false,
    direccion: false,
    cedula: false,
    contraseña: false,
    contraseña2: false,
    telefono: false
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById("email_id").classList.remove("formulario_incorrecto");
                document.getElementById("email_id").classList.add("formulario_correcto");
                error.innerHTML = "email correcto"
                campos.email = true;
            } else {
                document.getElementById("email_id").classList.remove("formulario_correcto");
                document.getElementById("email_id").classList.add("formulario_incorrecto");
                error.innerHTML = "email incorrecto";
                campos.email = false;
            }
            break;

        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                error.innerHTML = "nombre correcto";
                document.getElementById("nombre").classList.remove("formulario_incorrecto");
                document.getElementById("nombre").classList.add("formulario_correcto");
                campos.nombre = true;
            } else {
                error.innerHTML = "error en el nombre"
                document.getElementById("nombre").classList.remove("formulario_correcto");
                document.getElementById("nombre").classList.add("formulario_incorrecto");
                campos.nombre = false;
            }
            break;

        case "apellido":
            if (expresiones.apellido.test(e.target.value)) {
                document.getElementById("apellido").classList.remove("formulario_incorrecto");
                document.getElementById("apellido").classList.add("formulario_correcto");
                error.innerHTML = "apellido correcto";
                campos.apellido = true;
            } else {
                document.getElementById("apellido").classList.remove("formulario_correcto");
                document.getElementById("apellido").classList.add("formulario_incorrecto");
                error.innerHTML = "apellido incorrecto";
                campos.apellido = false;
            }
            break;

        case "direccion":
            if (expresiones.direccion.test(e.target.value)) {
                document.getElementById("direccion").classList.remove("formulario_incorrecto");
                document.getElementById("direccion").classList.add("formulario_correcto");
                error.innerHTML = "direccion correcta";
                campos.direccion = true;
            } else {
                document.getElementById("direccion").classList.remove("formulario_correcto");
                document.getElementById("direccion").classList.add("formulario_incorrecto");
                error.innerHTML = "la direccion debe empezar con cll, cra, av, anv, trans";
                campos.direccion = false;
            }
            break;

        case "cedula":
            if (expresiones.cedula.test(e.target.value)) {
                error.innerHTML = "cedula correcta";
                document.getElementById("cedula").classList.remove("formulario_incorrecto");
                document.getElementById("cedula").classList.add("formulario_correcto");
                campos.cedula = true;
            } else {
                document.getElementById("cedula").classList.remove("formulario_correcto");
                document.getElementById("cedula").classList.add("formulario_incorrecto");
                error.innerHTML = "la cedula debe contener 10 a 20 numeros";
                campos.cedula = false;
            }
            break;

        case "id":
            if (expresiones.id.test(e.target.value)) {
                document.getElementById("id").classList.remove("formulario_incorrecto");
                document.getElementById("id").classList.add("formulario_correcto");
                campos.id = true;
            } else {
                document.getElementById("id").classList.remove("formulario_correcto");
                document.getElementById("id").classList.add("formulario_incorrecto");
                campos.id = false;
            }
            break;

        case "id_pais":
            if (expresiones.id_pais.test(e.target.value)) {
                document.getElementById("id_pais").classList.remove("formulario_incorrecto");
                document.getElementById("id_pais").classList.add("formulario_correcto");
                campos.id_pais = true;
            } else {
                document.getElementById("id_pais").classList.remove("formulario_correcto");
                document.getElementById("id_pais").classList.add("formulario_incorrecto");
                campos.id_pais = false;
            }
            break;

        case "contraseña":
            if (expresiones.contraseña.test(e.target.value)) {
                error.innerHTML = "contraseña correcta"
                document.getElementById("contraseña").classList.remove("formulario_incorrecto");
                document.getElementById("contraseña").classList.add("formulario_correcto");
                campos.contraseña = true;
            } else {
                error.innerHTML = "contraseña 15 a 20 caracteres, debe contener mayúsculas, numeros, letras y/o los siguientes caracteres [#,%,/,&]";
                document.getElementById("contraseña").classList.remove("formulario_correcto");
                document.getElementById("contraseña").classList.add("formulario_incorrecto");
                campos.contraseña = false;

            }
            break;

        case "c_contraseña":
            if (expresiones.contraseña.test(e.target.value) && e.target.value == document.getElementById("contraseña").value) {
                document.getElementById("c_contraseña").classList.remove("formulario_incorrecto");
                document.getElementById("c_contraseña").classList.add("formulario_correcto");
                campos.contraseña2 = true;
            } else {
                document.getElementById("c_contraseña").classList.remove("formulario_correcto");
                document.getElementById("c_contraseña").classList.add("formulario_incorrecto");
                campos.contraseña2 = false;

            }
            break;

        case "telefono":
            if (expresiones.telefono.test(e.target.value)) {
                document.getElementById("telefono").classList.remove("formulario_incorrecto");
                document.getElementById("telefono").classList.add("formulario_correcto");
                campos.telefono = true;
            } else {
                document.getElementById("telefono").classList.remove("formulario_correcto");
                document.getElementById("telefono").classList.add("formulario_incorrecto");
                campos.telefono = false;
            }
            break;
    }
}


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (campos.apellido && campos.cedula && campos.contraseña && campos.direccion && campos.email && campos.id && campos.id_pais && campos.nombre && campos.telefono && campos.contraseña2) {
        formulario.reset();
        error.innerHTML = "envio exitoso";
        window.location = "../Taller 4 Carros/Registro_Gustos.html";
    } else {
        error.innerHTML = "llene bien el formulario";
    }
});
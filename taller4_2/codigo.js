const formulario = document.getElementById("form")

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
const validarFormulario = (e)=>{
    switch (e.target.name){
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById("email_id").classList.remove("formulario_incorrecto");
                document.getElementById("email_id").classList.add("formulario_correcto");



            } else{
                document.getElementById("email_id").classList.remove("formulario_correcto");
                document.getElementById("email_id").classList.add("formulario_incorrecto");
            } 
        break;

        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("nombre").classList.remove("formulario_incorrecto");
                document.getElementById("nombre").classList.add("formulario_correcto");



            } else{
                document.getElementById("nombre").classList.remove("formulario_correcto");
                document.getElementById("nombre").classList.add("formulario_incorrecto");
            } 
        break;

        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById("apellido").classList.remove("formulario_incorrecto");
                document.getElementById("apellido").classList.add("formulario_correcto");



            } else{
                document.getElementById("apellido").classList.remove("formulario_correcto");
                document.getElementById("apellido").classList.add("formulario_incorrecto");
            } 
        break;

        case "direccion":
            if(expresiones.direccion.test(e.target.value)){
                document.getElementById("direccion").classList.remove("formulario_incorrecto");
                document.getElementById("direccion").classList.add("formulario_correcto");



            } else{
                document.getElementById("direccion").classList.remove("formulario_correcto");
                document.getElementById("direccion").classList.add("formulario_incorrecto");
            } 
        break;

        case "cedula":
            if(expresiones.cedula.test(e.target.value)){
                document.getElementById("cedula").classList.remove("formulario_incorrecto");
                document.getElementById("cedula").classList.add("formulario_correcto");



            } else{
                document.getElementById("cedula").classList.remove("formulario_correcto");
                document.getElementById("cedula").classList.add("formulario_incorrecto");
            } 
        break;

        case "id":
            if(expresiones.id.test(e.target.value)){
                document.getElementById("id").classList.remove("formulario_incorrecto");
                document.getElementById("id").classList.add("formulario_correcto");



            } else{
                document.getElementById("id").classList.remove("formulario_correcto");
                document.getElementById("id").classList.add("formulario_incorrecto");
            } 
        break;

        case "id_pais":
            if(expresiones.id_pais.test(e.target.value)){
                document.getElementById("id_pais").classList.remove("formulario_incorrecto");
                document.getElementById("id_pais").classList.add("formulario_correcto");



            } else{
                document.getElementById("id_pais").classList.remove("formulario_correcto");
                document.getElementById("id_pais").classList.add("formulario_incorrecto");
            } 
        break;

        case "contraseña":
            if(expresiones.contraseña.test(e.target.value)){
                document.getElementById("contraseña").classList.remove("formulario_incorrecto");
                document.getElementById("contraseña").classList.add("formulario_correcto");



            } else{
                document.getElementById("contraseña").classList.remove("formulario_correcto");
                document.getElementById("contraseña").classList.add("formulario_incorrecto");
            } 
        break;

        case "c_contraseña":
            if(expresiones.contraseña.test(e.target.value) && e.target.value == document.getElementById("contraseña").value){
                document.getElementById("c_contraseña").classList.remove("formulario_incorrecto");
                document.getElementById("c_contraseña").classList.add("formulario_correcto");



            } else{
                document.getElementById("c_contraseña").classList.remove("formulario_correcto");
                document.getElementById("c_contraseña").classList.add("formulario_incorrecto");
            } 
        break;

        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById("telefono").classList.remove("formulario_incorrecto");
                document.getElementById("telefono").classList.add("formulario_correcto");



            } else{
                document.getElementById("telefono").classList.remove("formulario_correcto");
                document.getElementById("telefono").classList.add("formulario_incorrecto");
            } 
        break;
    }
}


inputs.forEach((input)=>{
input.addEventListener("keyup",validarFormulario);
input.addEventListener("blur",validarFormulario);
});


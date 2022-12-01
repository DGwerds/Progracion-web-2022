document.getElementsByName("inputB").forEach(obj => obj.addEventListener("input", validar_tamaño))
document.getElementById("direccion").addEventListener("input", validar_direccion)
document.getElementById("email").addEventListener("input", validar_email)
document.getElementById("contraseña").addEventListener("input", validar_contraseña)
document.getElementById("c_contraseña").addEventListener("input", confirmar_contraseña)
const msm_error = document.getElementById("Mensaje_error");

function validar_tamaño() {
   let tamano = this.value.length;
   let rango = [this.getAttribute("min"), this.getAttribute("max")]
   let error = tamano < rango[0] || tamano > rango[1]
   let mensaje = "El campo " + this.id + " "
   if (rango[0] != 1) {
      mensaje += "debe contener entre " + rango[0] + " y " + rango[1] + " caracteres"
   } else {
      mensaje += "no puede quedar vacio y no debe sobrepasar los " + rango[1] + " caracteres"
   }
   cambiar_color(this, error, mensaje)
}

function validar_contraseña() {
   let texto = this.value
   let rango = [this.getAttribute("min"), this.getAttribute("max")]
   let error = true;
   var mensaje = ""
   if (texto.length < rango[0] || texto.length > rango[1]) {
      mensaje += "La contraseña debe tener entre 15 y 20 caracteres (" + texto.length + ")<br/>"
   }
   if (!/(?=.*[A-Z])/.test(texto)) mensaje += "Debe contener mayúsculas<br/>"
   if (!/(?=.*[0-9])/.test(texto)) mensaje += "Debe contener numeros<br/>"
   if (!/(?=.*[#%/&])/.test(texto)) mensaje += "Debe contener los siguientes caracteres [#,%,/,&]"
   if (mensaje == "") error = false
   cambiar_color(this, error, mensaje)
}

function confirmar_contraseña() {
   let error = document.getElementById("contraseña").value != this.value
   const mensaje = "Las contraseñas no coinciden"
   cambiar_color(this, error, mensaje)
}

function validar_direccion() {
   let condicion = !/^cll|cra|av|anv|trans/.test(this.value)
   const mensaje = "El campo dirección debe empezar por las siguientes palabras.\
      cll, cra, av, anv, trans,"
   if (this.value == "") { condicion = false }
   cambiar_color(this, condicion, mensaje)
}

function validar_email() {
   let condicion = !/^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+\.[a-zA-Z-.]+$/.test(this.value)
   const mensaje = "El email no es valido"
   cambiar_color(this, condicion, mensaje)
}

function cambiar_color(objeto, error, mensaje) {
   if (error) {
      objeto.style.borderBottomColor = "red";
      msm_error.innerHTML = mensaje
   } else {
      objeto.style.borderBottomColor = "green";
      msm_error.innerHTML = ""
   }
}

function validacion_final() {
   let mensaje = ""
   const elementos = document.querySelectorAll('#form input')
   elementos.forEach(function (el) {
      if (el.value == "" || el.style.borderBottomColor == "red") {
         mensaje += "Error en la casilla " + el.id + " <br/>"
         cambiar_color(el, true, mensaje)
      }
   });
   if (msm_error.innerHTML == "") window.location = "../Taller4Carros/Registro_Gustos.html";
} // - 58%
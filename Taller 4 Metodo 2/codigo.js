let elementos = document.getElementsByName("inputB")
elementos.forEach(obj => obj.addEventListener("input", validar_tamaño))

document.getElementById("direccion").addEventListener("input", validar_direccion)

let error = document.getElementById("Mensaje_error");

//contraseña: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#%/&])(?!\s)[a-zA-Z0-9#%/&]{15,20}$/
//email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

function validar_tamaño() {
   let tamano = this.value.length;
   let rango = [this.getAttribute("min"), this.getAttribute("max")]
   let condicion = tamano < rango[0] || tamano > rango[1]
   let mensaje = "El campo " + this.id + " "
   if (rango[0] != 1) {
      mensaje += "debe contener entre " + rango[0] + " y " + rango[1] + " caracteres"
   } else {
      mensaje += "no puede quedar vacio y no debe sobrepasar los "+rango[1]+" caracteres"
   }
   cambiar_color(this, condicion, mensaje)
}

function validar_direccion() {
   let condicion = !/^cll|cra|av|anv|trans/.test(this.value)
   const mensaje = "El campo dirección debe empezar por las siguientes palabras.\
      cll, cra, av, anv, trans,"
   if (this.value == "") { condicion = false }
   cambiar_color(this, condicion, mensaje)
}

function cambiar_color(objeto, condicion, mensaje) {
   if (condicion) {
      objeto.style.borderBottomColor = "red";
      error.innerHTML = mensaje
   } else {
      objeto.style.borderBottomColor = "green";
      error.innerHTML = ""
   }
}

function validacion_final() {
   let mensaje = ""
   elementos.forEach(function (el) {
      if (el.value == "" || el.style.borderBottomColor == "red") {
         cambiar_color(el, true)
         mensaje += "Error en la casilla " + el.id + " <br/>"
      }
   });
   error.innerHTML = mensaje
}

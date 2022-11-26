// Para todos los elementos de inputs basicos se ejecuta la validacion basica
let elementos = document.getElementsByName("inputB")
elementos.forEach(obj => obj.addEventListener("input", validar_tamaño))

document.getElementById("direccion").addEventListener("input", validar_direccion)

// falta contrasenia

let error = document.getElementById("Mensaje_error");

function validar_tamaño() {
   let tamano = this.value.length;
   let rango = [this.getAttribute("min"), this.getAttribute("max")]
   let condicion = tamano < rango[0] || tamano > rango[1]
   let mensaje = "El campo " + this.id + " "
   if (rango[0] != 1) {
      mensaje+="debe contener entre "+rango[0]+" y "+rango[1] + " caracteres"
   } else {
      mensaje+="no puede quedar vacio y no debe sobrepasar los "+rango[1]+" caracteres"
   }
   cambiar_color(this, condicion, mensaje)
}

function validar_direccion() {
   let condicion = !/^cll|cra|av|anv|trans/.test(this.value)
   const mensaje = "El campo dirección debe empezar por las siguientes palabras.\
      cll, cra, av, anv, trans,"
   cambiar_color(this, condicion, mensaje)
}

function cambiar_color(objeto, condicion, mensaje) {
   if (condicion) {
      objeto.style.color = "red";
      error.innerHTML = mensaje
   } else {
      objeto.style.color = "black";
      error.innerHTML = ""
   }
}

function validacion_final() {
   let mensaje = ""
   elementos.forEach(function (el) {
      if (el.value == "") {
         mensaje += "Casilla " + el.id + " vacia<br/>"
      }
   });
   error.innerHTML = mensaje
}

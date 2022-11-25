// Para todos los elementos de inputs basicos se ejecuta la validacion basica
document.getElementsByName("inputB").forEach(obj => obj.addEventListener("input", validar))

error = true;

/* Validacion basica
   Resalta en rojo el texto ingresado en el input si este no cumple con la cantidad minima y 
   maxima de caracteres requeridos
   Se configura desde las propiedades del input (propiedad min y max)                     */
function validar() {
   var tamano = this.value.length;
   if (tamano >= this.getAttribute("max") || tamano < this.getAttribute("min")) {
      this.style.color = "red";
      error = true;
   } else {
      error = false;
      this.style.color = "black";
   }
}

function estado() {
   var mensaje = document.getElementById("Mensaje_error")
   if (error) {
      mensaje.style.visibility = "visible";
   } else {
      mensaje.style.visibility = "hidden";
   }
}

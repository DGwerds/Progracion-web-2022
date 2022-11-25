// Para todos los elementos de inputs basicos se ejecuta la validacion basica
document.getElementsByName("inputB").forEach(obj => obj.addEventListener("input", validar_tamaño))

document.getElementById("direccion").addEventListener("input", validar_direccion)

let error = true;

function validar_tamaño() {
   let tamano = this.value.length;
   let condicion = tamano >= this.getAttribute("max") || tamano < this.getAttribute("min")
   cambiar_color(this, condicion)
}

function validar_direccion() {
   let string = this.value;
   let expReg = /^cll|cra|av|anv|trans/
   cambiar_color(this, !expReg.test(string))
}

function cambiar_color(objeto, condicion){
   console.log(condicion)
   if (condicion) {
      objeto.style.color = "red";
      error = true;
   } else {
      error = false;
      objeto.style.color = "black";
   }
}

function estado() {
   let mensaje = document.getElementById("Mensaje_error")
   if (error) {
      mensaje.style.visibility = "visible";
   } else {
      mensaje.style.visibility = "hidden";
   }
}

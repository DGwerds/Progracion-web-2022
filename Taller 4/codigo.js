
document.getElementById("nombre").addEventListener("input", validar);
document.getElementById("apellido").addEventListener("input", validar);
document.getElementById("cedula").addEventListener("input", validar);
document.getElementById("email").addEventListener("input", validar);

error = true;

function validar() {
   var tamano = this.value.length;
   if (tamano >= this.getAttribute("maxlength") || tamano < this.getAttribute("minlength")) {
      this.style.color = "red";
      error = true;
   } else {
      error = false;
      this.style.color = "black";
   }
}

function estado(){
   if (error){
      document.getElementById("lab").style.visibility = "visible";
   }else{
      document.getElementById("lab").style.visibility = "hidden";
   }
}

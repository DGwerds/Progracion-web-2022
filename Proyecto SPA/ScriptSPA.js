let imagenes = document.getElementById("contenedor_imagenes").getElementsByTagName("img")
let contenedor_texto = document.getElementById("text-container")
Array.from(imagenes).forEach(imagen => imagen.addEventListener("mouseover", texto));

function texto() {
    switch (this.id) {
        case 'David':
            contenedor_texto.innerHTML = "David Martínez es el protagonista. Se convirtió en \
        mercenario y miembro de la tripulación edgerunner de Maine en 2076, cuando estuvo \
        involucrado en una serie de eventos desgarradores que lo llevaron a alcanzar el \
        estatus de leyenda de Night City.";
            break;

        case 'Lucyna':
            contenedor_texto.innerHTML = "Lucyna Kushinada, más conocida simplemente como Lucy, \
        es una netrunner y la deuteragonista de Cyberpunk: Edgerunners."
            break;

        case 'Maine':
            contenedor_texto.innerHTML = "Maine, es el lider de la banda a la que David se une en 2076"
            break;

        case 'Dorio':
            contenedor_texto.innerHTML = "Dorio, es la pareja y mano derecha de Maine"
            break;

        case 'Kiwi':
            contenedor_texto.innerHTML = "Kiwi, la odio con toda mi alma"
            break;

        case 'Pilar':
            contenedor_texto.innerHTML = "Pilar, hermano de Rebeca y el manos largas"
            break;

        case 'Rebecca':
            contenedor_texto.innerHTML = "Rebecca, la maniatica del equipo, esta enamorada de David"
            break;

        case 'Falco':
            contenedor_texto.innerHTML = "Falco, hace de conductor en algunos golpes de la banda"
            break;

        default:
            console.log(`Mensaje de error que nunca se deberia ver`);
    }
}
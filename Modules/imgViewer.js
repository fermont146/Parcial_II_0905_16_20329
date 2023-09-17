// Obtenemos elementos del DOM relacionados con la imagen en pantalla completa
const fulImgBox = document.getElementById("fulImgBox"); // Contenedor de la imagen en pantalla completa
const fulImg = document.getElementById("fulImg"); // Elemento de la imagen en pantalla completa

// Función para abrir una imagen en pantalla completa
function openFulImg(reference) {
    fulImgBox.style.display = "flex"; // Mostramos el contenedor de la imagen en pantalla completa
    fulImg.src = reference; // Establecemos la fuente de la imagen en pantalla completa
}

// Función para cerrar la imagen en pantalla completa
function closeImg() {
    fulImgBox.style.display = "none"; // Ocultamos el contenedor de la imagen en pantalla completa
}

// Función para generar una contraseña aleatoria
const generatePassword = (base, length) => {
  let password = "";
  for (let x = 0; x < length; x++) {
    // Genera un número aleatorio entre 0 y la longitud de la cadena "base"
    let random = Math.floor(Math.random() * base.length);
    // Añade el carácter correspondiente a la contraseña
    password += base.charAt(random);
  }
  return password; // Devuelve la contraseña generada
};

// Función para generar una contraseña con base en las opciones seleccionadas por el usuario
const generate = () => {
  // Obtiene la longitud deseada para la contraseña desde un elemento del DOM
  let length = parseInt(inputLength.value);

  // Define una cadena base que contiene letras minúsculas y mayúsculas por defecto
  let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Define cadenas adicionales para incluir números y símbolos según las opciones del usuario
  const numbers = "0123456789";
  const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

  // Si la opción de números está marcada, se agrega la cadena "numbers" a la base
  if (checkbox1.checked) base += numbers;

  // Si la opción de símbolos está marcada, se agrega la cadena "symbols" a la base
  if (checkbox2.checked) base += symbols;

  // Genera una contraseña utilizando la base y longitud especificadas y la muestra en el elemento "generatedPassword"
  generatedPassword.innerText = generatePassword(base, length);
};

// Agrega un evento para ejecutar la función "generate" cuando se carga la página
window.addEventListener("DOMContentLoaded", () => {
  btnGenerate.addEventListener("click", () => {
    generate(); // Llama a la función "generate" al hacer clic en el botón de generación
  });
});

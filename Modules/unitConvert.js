// Obtenemos elementos del DOM relacionados con las temperaturas en grados Celsius y Fahrenheit
let celsius = document.getElementById('celsius'); // Input para grados Celsius
let fahrenheit = document.getElementById('fahrenheit'); // Input para grados Fahrenheit

// Evento que se ejecuta cuando se ingresa una temperatura en grados Celsius
celsius.oninput = ()  => {
  // Calculamos la equivalencia en grados Fahrenheit y la mostramos en el input correspondiente
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2)); // Mostramos el resultado con dos decimales
};

// Evento que se ejecuta cuando se ingresa una temperatura en grados Fahrenheit
fahrenheit.oninput = ()  => {
  // Calculamos la equivalencia en grados Celsius y la mostramos en el input correspondiente
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 ;
  celsius.value = parseFloat(output.toFixed(2)); // Mostramos el resultado con dos decimales
};

// Obtener referencias a elementos HTML una sola vez
const botonSumar = document.getElementById('sumar');
const botonRestar = document.getElementById('restar');
const botonMultiplicar = document.getElementById('multiplicar');
const botonDividir = document.getElementById('dividir');
const respuesta = document.getElementById('Respuesta');
const inputN1 = document.getElementById('n1');
const inputN2 = document.getElementById('n2');

// Agregar controladores de eventos a los botones
botonSumar.addEventListener('click', hacerSuma);
botonRestar.addEventListener('click', hacerResta);
botonMultiplicar.addEventListener('click', hacerMultiplicar);
botonDividir.addEventListener('click', hacerDividir);

function hacerSuma() {
  realizarOperacion('+');
}

function hacerResta() {
  realizarOperacion('-');
}

function hacerDividir() {
    realizarOperacion('/');
  }


function hacerMultiplicar() {
    realizarOperacion('*');
  }

function realizarOperacion(operador) {
  // Obtener los valores de entrada como números flotantes
  const n1 = parseFloat(inputN1.value);
  const n2 = parseFloat(inputN2.value);

  // Verificar si los valores son números válidos
  if (isNaN(n1) || isNaN(n2)) {
    respuesta.innerHTML = 'Por favor, ingrese números válidos en ambos campos.';
  } else {
    let resultado;
    if (operador === '+') {
      resultado = n1 + n2;
    } else if (operador === '-') {
      resultado = n1 - n2;
    }
    if (operador === '/') {
        resultado = n1 / n2;
      } else if (operador === '*') {
        resultado = n1 * n2;
      }
    respuesta.innerHTML = `El resultado es ${resultado}`;
  }
}

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../Parcial_\u0000#2/Modules/calculos.js":
/*!******************************************!*\
  !*** ../Parcial_ #2/Modules/calculos.js ***!
  \******************************************/
/***/ (() => {

eval("// Obtener referencias a elementos HTML una sola vez\r\nconst botonSumar = document.getElementById('sumar');\r\nconst botonRestar = document.getElementById('restar');\r\nconst botonMultiplicar = document.getElementById('multiplicar');\r\nconst botonDividir = document.getElementById('dividir');\r\nconst respuesta = document.getElementById('Respuesta');\r\nconst inputN1 = document.getElementById('n1');\r\nconst inputN2 = document.getElementById('n2');\r\n\r\n// Agregar controladores de eventos a los botones\r\nbotonSumar.addEventListener('click', hacerSuma);\r\nbotonRestar.addEventListener('click', hacerResta);\r\nbotonMultiplicar.addEventListener('click', hacerMultiplicar);\r\nbotonDividir.addEventListener('click', hacerDividir);\r\n\r\nfunction hacerSuma() {\r\n  realizarOperacion('+');\r\n}\r\n\r\nfunction hacerResta() {\r\n  realizarOperacion('-');\r\n}\r\n\r\nfunction hacerDividir() {\r\n    realizarOperacion('/');\r\n  }\r\n\r\n\r\nfunction hacerMultiplicar() {\r\n    realizarOperacion('*');\r\n  }\r\n\r\nfunction realizarOperacion(operador) {\r\n  // Obtener los valores de entrada como números flotantes\r\n  const n1 = parseFloat(inputN1.value);\r\n  const n2 = parseFloat(inputN2.value);\r\n\r\n  // Verificar si los valores son números válidos\r\n  if (isNaN(n1) || isNaN(n2)) {\r\n    respuesta.innerHTML = 'Por favor, ingrese números válidos en ambos campos.';\r\n  } else {\r\n    let resultado;\r\n    if (operador === '+') {\r\n      resultado = n1 + n2;\r\n    } else if (operador === '-') {\r\n      resultado = n1 - n2;\r\n    }\r\n    if (operador === '/') {\r\n        resultado = n1 / n2;\r\n      } else if (operador === '*') {\r\n        resultado = n1 * n2;\r\n      }\r\n    respuesta.innerHTML = `El resultado es ${resultado}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///../Parcial_%00#2/Modules/calculos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../Parcial_\u0000#2/Modules/calculos.js"]();
/******/ 	
/******/ })()
;
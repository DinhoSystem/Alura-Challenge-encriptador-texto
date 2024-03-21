/*
hacer una funcion que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
}

function encriptar(texto) {
  let encriptado = document
    .getElementById("valorUsuario")
    .value.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.querySelector("#temporal").setAttribute("hidden", true);
  document.querySelector("#resultados").removeAttribute("hidden");
  document.querySelector("#btn-copiar").removeAttribute("hidden");

  asignarTextoElemento("resultadoFinal", encriptado);
  limpiarCaja();
}

function desencriptar(texto) {
  let desencriptado = document
    .getElementById("valorUsuario")
    .value.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  asignarTextoElemento("resultadoFinal", desencriptado);
  limpiarCaja();
  document.querySelector("#temporal").setAttribute("hidden", true);
  document.querySelector("#resultados").removeAttribute("hidden");
  document.querySelector("#btn-copiar").removeAttribute("hidden");
}

/*
funcion que haga que un boton copie el texto que se encuentra en un elemento textarea con id "resultadoFinal" al portapapeles del usuario
*/
function copiarTexto() {
  var texto = document.getElementById("resultadoFinal").value;
  navigator.clipboard.writeText(texto);
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

'use strict';
//contador
//Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: 
//-1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, 
//y actualizar el número mostrado.

// Hecho con funciones separadas

const botonMenos1 = document.querySelector("#botonMenos1");
const botonMas1 = document.querySelector("#botonMas1");
const botonMenos5 = document.querySelector("#botonMenos5");
const botonMas5 = document.querySelector("#botonMas5");
const botonMenos10 = document.querySelector("#botonMenos10");
const botonMas10 = document.querySelector("#botonMas10");
const numeroHtml = document.querySelector("h1");

let numero = 0;

const restaUno = ()=>{
    numero = numero - 1;
    numeroHtml.textContent = numero;
}
const SumaUno = ()=>{
    numero = numero + 1;
    numeroHtml.textContent = numero;
}
const restaCinco = ()=>{
    numero = numero - 5;
    numeroHtml.textContent = numero;
}
const sumaCinco = ()=>{
    numero = numero +5;
    numeroHtml.textContent = numero;
}
const restaDiez = ()=>{
    numero = numero - 10;
    numeroHtml.textContent = numero;
}
const sumaDiez = ()=>{
    numero = numero +10;
    numeroHtml.textContent = numero;
}

botonMenos1.addEventListener("click", restaUno);
botonMas1.addEventListener("click",SumaUno);
botonMenos5.addEventListener("click",restaCinco);
botonMas5.addEventListener("click", sumaCinco);
botonMenos10.addEventListener("click", restaDiez);
botonMas10.addEventListener("click", sumaDiez);


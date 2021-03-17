'use strict';
//contador
//Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: 
//-1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, 
//y actualizar el número mostrado.

const botonMenos1 = document.querySelector("#botonMenos1");
const botonMas1 = document.querySelector("#botonMas1");
const botonMenos5 = document.querySelector("#botonMenos5");
const botonMas5 = document.querySelector("#botonMas5");
const botonMenos10 = document.querySelector("#botonMenos10");
const botonMas10 = document.querySelector("#botonMas10");
const numeroHtml = document.querySelector("h1");
let numero = 0;

botonMenos1.addEventListener("click", (event) =>{
   numero = numero -1;
   numeroHtml.textContent = numero;
})
botonMas1.addEventListener("click", (event) =>{
    numero = numero +1;
    numeroHtml.textContent = numero;
 })
 botonMenos5.addEventListener("click", (event) =>{
    numero = numero -5;
    numeroHtml.textContent = numero;
 })
 botonMas5.addEventListener("click", (event) =>{
    numero = numero +5;
    numeroHtml.textContent = numero;
 })
 botonMenos10.addEventListener("click", (event) =>{
    numero = numero -10;
    numeroHtml.textContent = numero;
 })
 botonMas10.addEventListener("click", (event) =>{
    numero = numero +10;
    numeroHtml.textContent = numero;
 })
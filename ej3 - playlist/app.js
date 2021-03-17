'use strict';
//playlist
//Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. 
// Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

const cancion1 = document.querySelector("#cancion1");
const cancion2 = document.querySelector("#cancion2");
const cancion3 = document.querySelector("#cancion3");
const cancion4 = document.querySelector("#cancion4");
const cancion5 = document.querySelector("#cancion5");

const eleccion1 = prompt("Ingrese una cancion");
const eleccion2 = prompt("Ingrese una cancion");
const eleccion3 = prompt("Ingrese una cancion");
const eleccion4 = prompt("Ingrese una cancion");
const eleccion5 = prompt("Ingrese una cancion");

cancion1.textContent = eleccion1;
cancion2.textContent = eleccion2;
cancion3.textContent = eleccion3;
cancion4.textContent = eleccion4;
cancion5.textContent = eleccion5;
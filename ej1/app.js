'use strict';
// const miBoton = document.querySelector("#miBoton");
const miInput = document.querySelector("#miInput");

//Le agrega a mi elemento de mi html un escuchador de evento. 
//Le agrega primero la accion que va a detonar el evento por ej click
//y despues la accion que va a realizar por ej un alert
/*miBoton.addEventListener("click", () => {
    alert("Hola como estas?");
})
*/
/*click
keypress (Se apreta una tecla)
keyup (Cuando suelto la tecla)
keydown(Cuando la tecla queda presionada)*/
   
/*miInput.addEventListener("keyup", (event) => {
    console.log(event.key);
    if (event.key == "s") {
    alert("Saliste del programa");
    } else if(event.key == "n"){
        alert("Te quedas en el programa");
    } else {
        alert("Pulsa s o n")
    }
}) */ 
//Es lo mismo que lo prox por separado, guardando la funcion en una variable
const teclasSN = (event) => {
    console.log(event.key);
    if (event.key == "s") {
    alert("Saliste del programa");
    } else if(event.key == "n"){
        alert("Te quedas en el programa");
    } else {
        alert("Pulsa s o n")
    }
}
miInput.addEventListener("keyup", teclasSN);

/*Hacer un programa que tenga 3 botones y, al presionar uno, nos indique 
qué botón toco.
1.Hay que armar el HTMLa.Crear 3 botones con diferente texto y id
2.En el js guardo en const a los elementos del htmla.Con const y querySelector 
guardar los elementos del dom
3.Agregar un evento a cada uno de los elementos 
anteriormete guardadosa.Agregar al elemento un addEventListener y pasandole como 
primer parametro el string "click"
4.En el evento se tiene que disparar un alerta. 
dentro de la funcion flecha disparar un alert con un texto*/

const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");

boton1.addEventListener("click", (event) => {
    console.log(event); /*Me da informacion del evento. Si hay un key y pones event.key te muestra la tecla */
    alert("Hola1")
})
boton2.addEventListener("click", () => {
    alert("Hola2")
})
boton3.addEventListener("click", () => {
    alert("Hola3")
})
'use strict';
/*const button = document.querySelector("#button");
const form = document.querySelector("#form");

button.addEventListener("click", (event) => {
    event.preventDefault(); //Previene que el elemento haga su accion por defecto que en este caso querria recargar la pagina
    event.stopPropagation();//Esto hace que el click de form no lo afecte.
    alert("Hola como estas?")
})

form.addEventListener("click", () =>{
    alert("Click en form");
})
*/
/*Hacer un programa que se escriba un texto en el input y cuando se haga click en boton se muestre en el titulo*/
//El evento es reaccion a clickear el boton por eso se le hace el addevent.. a button.
const titulo = document.querySelector("h1");
const button = document.querySelector("#button");
const input = document.querySelector("#input"); 

const changeTitle = (event) =>{
    event.preventDefault();
    titulo.textContent = input.value;
}

button.addEventListener("click", changeTitle);

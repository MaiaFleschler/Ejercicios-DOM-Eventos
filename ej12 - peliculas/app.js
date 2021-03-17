const accion = document.querySelector(".accion");
const comedia = document.querySelector(".comedia");
const romanticas = document.querySelector(".romanticas");
const botonAccion = document.querySelector(".botonAccion");
const botonComedia = document.querySelector(".botonComedia");
const botonRomanticas = document.querySelector(".botonRomanticas");
const botonTodas = document.querySelector(".botonTodas");

botonAccion.addEventListener("click", ()=>{
    accion.style ="display:block;"
    comedia.style ="display:none;"
    romanticas.style ="display:none;"
})
botonComedia.addEventListener("click", ()=>{
    comedia.style ="display:block;"
    accion.style ="display:none;"
    romanticas.style ="display:none;"
})
botonRomanticas.addEventListener("click", ()=>{
    romanticas.style ="display:block;"
    accion.style ="display:none;"
    comedia.style ="display:none;"
})
botonTodas.addEventListener("click", ()=>{
    accion.style ="display:block;"
    comedia.style ="display:block;"
    romanticas.style ="display:block;"
})

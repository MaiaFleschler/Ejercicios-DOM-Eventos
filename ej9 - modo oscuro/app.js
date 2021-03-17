const titulo = document.querySelector("h1");
const parrafo = document.querySelector("p");
const boton = document.querySelector("button");
const body = document.querySelector("body");
const icono = document.querySelector("i");

boton.addEventListener("click", ()=>{
    if(titulo.className === "textoBlanco"){
    titulo.className = "textoNegro";
    } else{
        titulo.className = "textoBlanco";
    }
    if(parrafo.className === "textoBlanco"){
    parrafo.className = "textoNegro";
    } else{
        parrafo.className = "textoBlanco";
    }
    if(body.className === "fondoBlanco"){
    body.className = "fondoNegro";
    } else{
        body.className = "fondoBlanco";
    }
    if(icono.className === "fa fa-sun-o textoBlanco"){
        icono.className = ("fa fa-moon-o textoNegro");
    } else{
        icono.className = ("fa fa-sun-o textoBlanco");
    }
})
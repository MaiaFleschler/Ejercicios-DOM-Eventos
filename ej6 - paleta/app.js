        const rojo = document.querySelector(".rojo");
        const amarillo = document.querySelector(".amarillo");
        const verde = document.querySelector(".verde");
        const azul = document.querySelector(".azul");
        const rosa = document.querySelector(".rosa");
        const naranja = document.querySelector(".naranja");
        const cuadrado = document.querySelector("#cuadrado");

        rojo.addEventListener("click", () => {
            cuadrado.className = "rojo";
        })
        amarillo.addEventListener("click", () => {
            cuadrado.className = "amarillo";
        })
        verde.addEventListener("click", () => {
            cuadrado.className = "verde";
        })
        azul.addEventListener("click", () => {
            cuadrado.className = "azul";
        })
        rosa.addEventListener("click", () => {
            cuadrado.className = "rosa";
        })
        naranja.addEventListener("click", () => {
            cuadrado.className = "naranja";
        })
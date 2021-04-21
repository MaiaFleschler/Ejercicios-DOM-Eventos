        const botonCorrecto = document.getElementById("botonCorrecto");
        const botonIncorrecto1 = document.getElementById("botonIncorrecto1");
        const botonIncorrecto2 = document.getElementById("botonIncorrecto2");
        const respuesta = document.getElementById("respuesta");

        botonCorrecto.addEventListener("click", ()=>{
            respuesta.textContent = "¡Correcto!";
            botonCorrecto.style = "background-color:green; color:white;"
        })
        const error = ()=>{
            respuesta.textContent = "¡Le erraste!";
            botonIncorrecto1.style = "background-color:red; color:white;"
            botonIncorrecto2.style = "background-color:red; color:white;"
            botonCorrecto.style = "background-color:green; color:white;"
        }

        botonIncorrecto1.addEventListener("click", error);
        botonIncorrecto2.addEventListener("click", error);

caso = () => {
    const respuesta = window.prompt("¿eres culpable?")

    if (respuesta == "si") {
        document.write("iras a la carcel")
    }
    else
    {
        if (respuesta == "no") {
            document.write("iras a casa")
        } else {
            document.write("introduzca la documentacion")
        }
    }


}

const boton = document.querySelector("#btn_p")

boton.addEventListener("click",caso)
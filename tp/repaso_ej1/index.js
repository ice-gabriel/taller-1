const num = () => {
    const respuesta = window.prompt("introduzca un numero")

    if (respuesta < 0) {
        document.write("negativo")
    }
    else
    {
        if (respuesta > 0) {
            document.write("positivo")
        } else {
            if (respuesta == 0) {
                document.write("nulo")
            } else {
                document.write("no lo pudimos leer")
            }
            
        }
    }


}

const boton = document.querySelector("#btn_p")

boton.addEventListener("click",num)
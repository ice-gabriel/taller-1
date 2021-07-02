const num = () => {
    const respuesta = window.prompt("introduzca un numero")
    const respuesta2 =window.prompt("introduzca otro numero")

    let R = parseInt(respuesta) + parseInt(respuesta2);

    return R
}

const num2 = () => {
    let respuesta = num();
let RF = Math.sign(respuesta)

if (RF == -1) {
    document.write("el numero es negativo")
}
else
{
    if (RF == 1) {
        document.write("el numero es positivo")
    } else {
        if (RF == 0) {
            document.write("el numero es nulo")
        } else {
            document.write("el numero no lo pudimos leer")
        }
        
    }
}
}


const boton2 = document.querySelector("#btn_p2")

boton2.addEventListener("click",num2)
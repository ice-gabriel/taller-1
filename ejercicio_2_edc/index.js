
topping = () => {
        const respuesta = window.prompt("¿cual es el topping de su helado?")

    let helado = 250;

    if (respuesta == "oreo") {
        let total = helado + 40;
        document.write("el total es: ",total)
    } else {
        if (respuesta == "kitkat") {
            let total = helado + 55;
            document.write("el total es: ",total)
        } else{
            if (respuesta == "brownie") {
                let total = helado + 65;
                document.write("el total es: ",total)
            } else{
                if (respuesta == "rocklets") {
                    let total = helado + 75;
                    document.write("el total es: ",total)
                } else{
                    document.write("lo sentimos no tenemos ese topping, su total es: ",helado)
                }
            }   
        }
        
    }
}

const boton = document.querySelector("#btn_t")

boton.addEventListener("click",topping)


//oreo=40  kitkat=55  brownie=65  rocklets=75  
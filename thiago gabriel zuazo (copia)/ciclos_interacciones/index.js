const calcular1 = () =>{
    let miarreglo = [44,88,11,2,7]


}


const boton = document.querySelector("#btn_calcular")
boton.addEventListener("click",calcular1)

const recorrer_arreglo = () => {
    let miarreglo2 = ['programacion1','web2','robotica']

    for(indice in miarreglo){
        console.log( miarreglo2[indice] )
    }
}

const boton2 = document.querySelector("#btn_recorrer")
boton2.addEventListener("click",recorrer_arreglo)
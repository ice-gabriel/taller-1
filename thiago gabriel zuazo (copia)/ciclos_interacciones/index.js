const calcular1 = () =>{
    let miarreglo = [44,88,11,2,7]


}


const boton = document.querySelector("#btn_calcular")
boton.addEventListener("click",calcular1)

const recorrer_arreglo = () => {
    let miarreglo2 = ['programacion1','web2','robotica']

    for(indice in miarreglo2){
        console.log( miarreglo2[indice] )
    }
}

const boton2 = document.querySelector("#btn_recorrer")
boton2.addEventListener("click",recorrer_arreglo)







let miobjeto = {
    nombre:'pepe',
    correo:{
        correo1:'pepito@gmail.com',
        correo2:'pepito@outlook.com'
    },
    redes_sociales:{
        facebook:'www.facebook.com/pepe',
        twitter:'www.facebook.com/pepe'
    }

    

}

console.log(`
    mi nombre es: ${miobjeto.nombre}
    mi facebook es: ${miobjeto.redes_sociales.twitter}
    
    `);





    const recorrer_objetos = [
        {
            nombre:'pepe',
            apellido:'argento'
        },
        {
            nombre:'juan',
            apellido:'perez'
        }
    ]



    recorrer_objetos.forEach(objeto =>{
        console.log(
            `
            nombre: ${objeto.nombre}
            apellido: ${objeto.apellido}
            
            `
        )
    });

    const boton4 = document.querySelector("#btn_recorrer_objetos")
    boton4.addEventListener("click",recorrer_objetos)
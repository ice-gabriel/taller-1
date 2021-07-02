


const vacuna1 = () =>{

    let vacunas = ["Pfizer","Moderna","AztraZeneca","Sinopharm","Sputnik V","Sinovac","Covishield"]


    document.write(`
    el tercer elemento es: ${vacunas[2]}
    el ultimo elemento es: ${vacunas[6]}
    el numero de elementos es ${vacunas.length}
    
    
    
    `)
}




const boton = document.querySelector("#btn_p")

boton.addEventListener("click",vacuna1)


const vacuna = () =>{
    let vacunas = ["Pfizer","Moderna","AztraZeneca","Sinopharm","Sputnik V","Sinovac","Covishield"]

   
    vacunas.forEach(element => {
        console.log(`
        ${element}
        
        `)
        
    });


    let primero = vacunas.shift()
   
    let vacunita = vacunas.push('johnson & johnson')

    let nuevaLongitud = vacunas.unshift('Novavax')

    let pos = 2

    let element = 2
    let bulubu = vacunas.splice(pos, element)

    for(indice in vacunas)
    {
      document.write(" " + vacunas[indice])
    }
    
}


const boton2 = document.querySelector("#btn_p2")

boton2.addEventListener("click",vacuna)
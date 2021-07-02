const vacuna = () =>{
    let vacunas = ["Pfizer","Moderna","AztraZeneca","Sinopharm","Sputnik V","Sinovac","Covishield"]

   
   

    document.write(`
    el tercer elemento es: ${vacunas[2]}
    el ultimo elemento es: ${vacunas[6]}
    el numero de elementos es ${vacunas.length}
    
    
    
    `)
}


const boton = document.querySelector("#btn_p")

boton.addEventListener("click",vacuna)
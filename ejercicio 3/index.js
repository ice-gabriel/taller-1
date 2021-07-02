

const concurso = () => {
    let nombres = ["ana", "oswaldo", "raul", "celia", "maria" ]


  

    for(indice in nombres)
    {
      document.write(" " + nombres[indice])
    }

    nombres.forEach(element => {
        document.write(`
        ${element}
        
        `)
        
    });


    document.write(`
    1 puesto: ${nombres[0]}
    2 puesto: ${nombres[1]}
    3 puesto: ${nombres[2]}
    
    
    
    `)
}

const boton = document.querySelector("#btn_p")

boton.addEventListener("click",concurso)
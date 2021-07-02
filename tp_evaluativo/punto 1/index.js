const flecha = () =>{


    let lenguajes = [ "Python", "JavaScript" , "Csharp" , "C++" , "Java" , "PHP" , "Ruby"]



    let GO = lenguajes.push('go')

    let KOTLIN = lenguajes.unshift('kotlin')


    let pos = 5

    let elemento = 2
    let bulubu = lenguajes.splice(pos, elemento)



    document.write(`
    el tercer elemento es: ${lenguajes[2]}
     
    `)

    lenguajes.forEach(element => {
        console.log(`
        ${element}
        
        `)
        
    });

    document.write(`
   
    el numero de elementos es ${lenguajes.length}
    `)
}

const boton = document.querySelector("#btn_p")

boton.addEventListener("click",flecha)
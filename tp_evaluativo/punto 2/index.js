

const flecha = () =>{


const framework = { 
titulo: 'Framework utilizado en la actualidad',
nombre: 'Angular',
caracteristicas: {
lenguaje: 'TypeScript',
patron: 'MVVM',
spa: 'si'
},
}


console.log(`


    el titulo es: ${framework.titulo}
    el nombre es: ${framework.nombre}
    las caracteristicas son:
    lenguaje: ${framework.caracteristicas.lenguaje}
    patron: ${framework.caracteristicas.patron}
    spa: ${framework.caracteristicas.spa}






`)



















}

const boton = document.querySelector("#btn_p")

boton.addEventListener("click",flecha)
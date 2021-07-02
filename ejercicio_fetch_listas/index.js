const mostrar_usuarios = async () => {

    const r = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await r.json();


    data.forEach(element =>{
        console.log(element.name)
    })



}




const boton = document.getElementById("btn_m");
boton.addEventListener("click", mostrar_usuarios)
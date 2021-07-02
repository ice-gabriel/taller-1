const mensaje_clima = () => {


    const valor_clima = document.querySelector("#slt_clima").Value;
    const parrafo = document.querySelector("#p_descripcion_clima");


    var mensaje = '';
    if(valor_clima == 0)
    {
        mensaje = "cielo despejado, si probabilidad de nubosidad";
        parrafo.textContent = mensaje;
    }
    else
    {
        if(valor_clima == 1)
        {
            mensaje = "fuertes lluvias, con posibilidad de mejora durante noche";
            parrafo.textContent = mensaje;
        }
        else
        {
            mensaje = "cielo parcialmente nublado, con posibilidad de lluvias";
            parrafo.textContent = mensaje;
        }
    }
    
}
const select = document.querySelector("#slt_clima")

select.addEventListener("change", mensaje_clima)
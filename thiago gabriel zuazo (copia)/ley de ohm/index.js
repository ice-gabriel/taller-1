const mensaje_ohm = () => {
    const u = document.querySelector("#inp_1").value;
    const d = document.querySelector("#inp_2").value;
;
    
        
    
    const valor_ohm = document.querySelector("#slt_ohm").value;

    const parrafo = document.querySelector("#p_ohm");
    const label1 = document.querySelector("#L1");
    const label2 = document.querySelector("#L2");


    if(valor_ohm == 0)
    {
        const intensidad = parseInt(u)/parseInt(d);
        parrafo.textContent = intensidad;
        label1.textContent = ("V")
        label2.textContent = ("R")
    }
    else{
        if(valor_ohm == 1){
            const tension = parseInt(u)*parseInt(d);
        parrafo.textContent = tension;
        label1.textContent = ("I")
        label2.textContent = ("R")
        }
        else {
            const resistencia = parseInt(u)/parseInt(d);
        parrafo.textContent = resistencia;
        label1.textContent = ("V")
        label2.textContent = ("I")
        }
    }
}


const select = document.querySelector("#slt_ohm");

select.addEventListener("change", mensaje_ohm);

const btn = document.querySelector("#btn");


btn.addEventListener("click",mensaje_ohm);











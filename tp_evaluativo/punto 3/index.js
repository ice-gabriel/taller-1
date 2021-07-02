


  




function pitagoras(a, b){



let A = Math.pow(a, 2)
let B = parseInt(2) * parseInt(9.8) * parseInt(b)
let suma = parseInt(A) + parseInt(B)


let raiz = Math.sqrt(suma)


return raiz
}
    
    



function imprimir(){
    const a = document.getElementById('inp_co').value;
    const b = document.getElementById('inp_ca').value;
    let raiz_R = pitagoras(a, b)
    document.getElementById("RH").textContent = raiz_R
}


const boton = document.querySelector("#btn_p")

boton.addEventListener("click",imprimir)
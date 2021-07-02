


  




function pitagoras(a, b){

    a2 = Math.pow(a, 2)
    c = (2*9.8*b)
    suma = parseInt(a2) + parseInt(c)
    raiz = Math.sqrt(suma)
    return raiz
    }
        
        
    
    
    
    function imprimir(){
        const a = document.getElementById('inp_vi').value;
        const b = document.getElementById('inp_h').value;
        let raiz_R = pitagoras(a, b)
        document.getElementById("v_vf").textContent = raiz_R
    }
    
    
    const boton = document.querySelector("#btn_p")
    
    boton.addEventListener("click",imprimir)
function pitagoras(a, b){



    let c = Math.pow(a, 2)
    let d = parseInt(2) * parseInt(9.8) * parseInt(b)
    let suma = parseInt(c) + parseInt(d)
    
    
    let raiz = Math.sqrt(suma)
    
    
    return raiz
    }
        
        
    
    
    
    function imprimir(){
        const a = document.getElementById('inp_vi').value;
        const b = document.getElementById('inp_h').value;
        let raiz_R = pitagoras(a, b)
        document.getElementById("r_vf").textContent = raiz_R
    }
    
    
    const boton = document.querySelector("#btn_p")
    
    boton.addEventListener("click",imprimir)
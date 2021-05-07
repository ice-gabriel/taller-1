const math = () =>{
    const a = document.querySelector("#a").value
    const b = document.querySelector("#b").value
    const c = document.querySelector("#c").value
    
    const ru = document.querySelector("#r1");
    const rd = document.querySelector("#r2");
    
    const bloque1 = Math.pow(b,2) - 4 * c
    const bloque2 = 2 * a
    const raiz = Math.sqrt(bloque1)
    const bloque3 = raiz/bloque2
    
    const resultado1 = -b + bloque3
    const resultado2 = -b - bloque3
    
    ru.textContent = resultado1;
    rd.textContent = resultado2;
    
}
const btn = document.querySelector("#btn");
btn.addEventListener("click",math);
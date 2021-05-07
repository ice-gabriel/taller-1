import Auto from './auto';

//creamos la instancia de la clase Auto
const auto = new Auto();

//identificamos el boton atravez de su id
const btn_aranque = document.querySelector("#btn_arranque");

btn_aranque.addEventListener("click",auto.arranque());
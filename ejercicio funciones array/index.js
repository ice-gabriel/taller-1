
var mi_lista_completa = [

    {
        tarea:"tp matematica",
        tiempo:"15 mins"
    },

    {
        tarea:"tpe programacion",
        tiempo:"1:20hrs"
    }
]


const listar = () => {
    mis_tareas.forEach(element=> {
        console.log(element.tarea)

        let item = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${element.tarea}</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">${element.tiempo}</span>
  </li>

        `;

        listar_items.push(item)
    });

    document.getElementById("mistareas").innerHTML = lista_items.join("");
}

const guardar = () => {
    const ta = document.getElementById('#inp_tarea').value;
    const ti = document.getElementById('#inp_tiempo').value;

    const nueva_tarea = {
        tarea:ta,
        tiempo:ti
    }
    mis_tareas.push()

    listar()
}
const boton = document.getElementById('#btn_guardar');
boton.addEventListener("click",guardar);



/*let mi_lista = ['gaseosa','agua','queso','papas fritas'];

let mi_lista_completa = [

    {
        producto:"gaseosa",
        precio:"120"
    },

    {
        producto:"papas fritas",
        precio:"250"
    }
]*/
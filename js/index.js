class PoderCV {
    constructor(
        id,
        villano,
        poder
    ) {
        this.id = id;
        this.villano = villano;
        this.poder = poder;
    }

}

// ``

// Variables
let poderesArr = [];
let numeroPoder = 1;

// Referencias al HTML
const nuevoPoderBoton = document.querySelector('#nuevoPoderBoton');
const agregarNuevoPoderBoton = document.querySelector('#agregarNuevoPoderBoton');
const villanos = document.querySelector('#villanos');
const superPoder = document.querySelector('#superPoder');
const nuevoPoderModal = new bootstrap.Modal(document.querySelector('#nuevoPoderModal'));
const tbodyPoderes = document.querySelector('#tbodyPoderes');
const pruebaEditar = document.querySelectorAll('.pruebaEditar')
const pruebaEliminar = document.querySelectorAll('.pruebaEliminar')

// Eventos
// nuevoPoderBoton.addEventListener('click', (event) => {
// const poder = new PoderCV('Daniela', 'Mete y saca 3000')
// console.log({ poder });
// })

agregarNuevoPoderBoton.addEventListener('click', (event) => {
    let poder = superPoder.value;
    let villano = villanos.value;
    if (poder && villano) {
        const poderCv = new PoderCV(villano, poder)
        poderesArr.push(poderCv)
        anadirPoderHtml(poderCv);
        localStorage.setItem('poderes', JSON.stringify(poderesArr));
        nuevoPoderModal.hide();
    }
});

// Funciones
const anadirPoderHtml = ({ poder, villano }) => {
    id = numeroPoder;
    const html = `<th scope="row">${id}</th><td>${poder}</td><td>${villano}</td>`;
    numeroPoder++;
    const tr = document.createElement('tr');
    tr.classList.add('animated', 'fadeIn', 'slow')
    tr.innerHTML = html;
    tbodyPoderes.append(tr);
}

const cargarBD = () => {
    const bd = localStorage.getItem('poderes');
    if (bd) {
        poderesArr = JSON.parse(bd);
        poderesArr.forEach(element => {
            anadirPoderHtml(element);
        });
    }
}
cargarBD();

const eliminarPoder = (id)=>{

    poderesArr.splice(id-2,1);
    localStorage.setItem('poderes',poderesArr)
}

const editarPoder = (id)=>{
    console.log(id);
}

// superPoder.addEventListener('keyup',(event)=>{
//     console.log(event.target.value);
// })
// Selectores
const nuevoPoderBoton = document.querySelector('#nuevoPoderBoton');
const agregarNuevoPoderBtn = document.querySelector('#agregarNuevoPoderBoton');
const villanos = document.querySelector('#villanos');
const superPoder = document.querySelector('#superPoder');
const formulario = document.querySelector('#formulario');

let editando;

const poderesObj = {
    villanos: '',
    superPoder: '',
};

listeners();
function listeners() {
    formulario.addEventListener('submit', nuevoPoder);
    villanos.addEventListener('change', datosCV);
    superPoder.addEventListener('change', datosCV);
}

class PoderCV{
    constructor() {
        this.poder = [];
    }

    agregarPoder(poderes) {
        this.poder = [...this.poder, poderes];
        console.log(this.poder);
    }


}

class UI {
    mensajeAlertas(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.className = 'text-center alert d-block col-12';
        
        if( tipo === 'error' ) {
            divMensaje.classList.remove('alert-success');
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.remove('alert-danger');
            divMensaje.classList.add('alert-success');
        }

        divMensaje.innerText = mensaje;

        document.querySelector('.modal-body').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

const poderCv = new PoderCV();
const ui = new UI();

function datosCV(e) {
    poderesObj[e.target.name] = e.target.value;
}

function nuevoPoder(e) {
    e.preventDefault();
    const { villanos, superPoder } = poderesObj
    if ( superPoder === "" ) {
        ui.mensajeAlertas('Debes ingresar un super poder','error');
        return;
    }

    if( editando ) {

    } else {
        poderCv.agregarPoder({...poderesObj});

        ui.mensajeAlertas('Se agregó correctamente');
    }

    formulario.reset();

    
}


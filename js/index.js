class PoderCV{
    constructor(
        villano,
        poder
    ){
        this.villano = villano;
        this.poder = poder;
    }

}

// Referencias al HTML
const nuevoPoderBoton = document.querySelector('#nuevoPoderBoton');
const agregarNuevoPoderBoton = document.querySelector('#agregarNuevoPoderBoton');
const villanos = document.querySelector('#villanos');
const superPoder = document.querySelector('#superPoder');
const poderesArr = [];

// Eventos
nuevoPoderBoton.addEventListener('click',(event)=>{
    const poder = new PoderCV('Daniela','Mete y saca 3000')
    console.log({poder});
})

agregarNuevoPoderBoton.addEventListener('click',(event)=>{
    let poder = superPoder.value;
    let villano = villanos.value;
    if(poder && villano){
        const poderCv = new PoderCV(villano,poder)
        poderesArr.push(poderCv)
        localStorage.setItem('poderes',JSON.stringify(poderesArr))
    }
})

// Añadir poder en la tabla
const anadirPoderHtml = (poder)=>{

}

// superPoder.addEventListener('keyup',(event)=>{
//     console.log(event.target.value);
// })
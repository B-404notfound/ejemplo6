const lista = document.querySelector('#lista')
const fragment = document.createDocumentFragment();
const idTemplate = document.querySelector('#idTemplate')

const arrayCanciones = ["Ojalá","La prision","Oh melancolia"];

arrayCanciones.forEach((canciones)=>{
    const clone = idTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent=canciones;

    fragment.appendChild(clone)

})

lista.appendChild(fragment)
import { calcularDi } from './3calcDi.js';
import { mar100,mar50 } from './2calcDurezas.js';
import {factJominy} from './4factJominy.js';
import { calcularDurezas } from './5Durezas.js';

// Obtener el botón por su clase
const boton = document.querySelector('.boton');
// Agregar un event listener al botón
boton.addEventListener('click', function () {
    // Obtener el formulario
    let formData = document.querySelector('.Formulario-Composicion');
    const formulario = new FormData(formData);
    const compQuimica =Object.fromEntries(formulario.entries());
    const Di = calcularDi(compQuimica,boton);
    const dur100Mar = mar100(compQuimica.Carbono);
    const dur50Mar = mar50(compQuimica.Carbono);
    const FactoresJ = factJominy(Di);
    const durezas = calcularDurezas(dur100Mar,FactoresJ);
})
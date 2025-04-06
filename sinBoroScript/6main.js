import { plot } from './7plotDi.js';
import { Lamont } from './8lamont.js';

    
    document.addEventListener("DOMContentLoaded", recibirDatos)
    function recibirDatos(){
        let datos = new URLSearchParams(window.location.search);
        let Di = parseFloat(datos.get('Di'));
        let mar100 = parseFloat(datos.get('dur100Mar'));
        let mar50 = parseFloat(datos.get('dur50Mar'));
        let comQuim = datos.get('cQ').split(',').map(Number);
        let durezas = datos.get('durezas').split(',').map(Number);
        const [datosPlot,personalizar] = plot(durezas)

        window.Plotly.newPlot('Jominychart', datosPlot,personalizar)
        console.log()
        let [H1,HInfinito] =Lamont(mar50,durezas)
        console.log(typeof(H1))
        if (typeof(H1) === 'number'){
            document.querySelector('#InformacionJ').innerHTML = `El diametro ideal del acero por Grossman es: <b>${Di.toFixed(3)} in</b>.<br>
            El diametro ideal del acero por Jominy es: <b>${HInfinito.toFixed(3)} in</b>.<br>
            La dureza del 50% de martensita es: <b>${mar50.toFixed(1)} HRC</b>. <br>
            El maximo diametro que se puede templar en agua es: <b>${H1.toFixed(3)} in</b>.<br>
            `
        }else{
            document.querySelector('#InformacionJ').innerHTML = `El diametro ideal del acero por Grossman es: <b>${Di.toFixed(3)} in</b>.<br>
            ${H1}`
        }
}
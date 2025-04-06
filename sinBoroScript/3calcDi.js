export function calcularDi (compQuimica){
   
    let C = factCarbon(parseFloat(compQuimica.Carbono));
    let Mn = factManganeso(parseFloat(compQuimica.Manganeso));
    let Si = factSilicio(parseFloat(compQuimica.Silicio));
    let Ni = factNiquel(parseFloat(compQuimica.Niquel));
    let Cr = factCromo(parseFloat(compQuimica.Cromo));
    let Mo = factMolibdeno(parseFloat(compQuimica.Molibdeno));
    let Cu = factCobre(parseFloat(compQuimica.Cobre));
    let V = factVanadio(parseFloat(compQuimica.Vanadio));
    let Zr = factZirconio(parseFloat(compQuimica.Zirconio));
    //Se hace una funcion especial para cada elemento, la cual contenga la expresion matematica que define el factor a calcular.
    if (C == 1 && Mn == 1 && Si == 1 && Ni == 1 && Cr == 1 && Mo == 1 && Cu == 1 && V == 1 && Zr == 1){
        setTimeout(() => {
            location.reload();
        }, 2000);
    
    }else if(C * Mn * Si * Ni * Cr * Mo * Cu * V * Zr <= 0.85){
        mensaje(2000)

    }else{
        return C * Mn * Si * Ni * Cr * Mo * Cu * V * Zr;
    }
}


function mensaje (duracion){
    document.querySelector("#toast").style.textAlign = "center"
    const toast =document.querySelector('#toast');
    toast.textContent = `Upps, parece que el diametro ideal de este acero es menor que 1 in, esto se sale del alcance de la norma, por lo tanto TEMPLABILIMETER, no puede ayudarte`;


    toast.style.display = 'block';
    // Reinicia la animación
    toast.style.animation = 'none';
    void toast.offsetWidth;
    toast.style.animation = null;

    setTimeout(() => {
        toast.style.display = 'none';
    }, duracion);
}
    

function factCarbon(Carbono){

    if (Carbono === '' || isNaN(Carbono) || Carbono === 0 ) {
        return 1;
    }

    if (Carbono <= 0.39){
        return 0.54 * Carbono; 
    }

    if (0.39 < Carbono && Carbono<= 0.55){
        return 0.171 + 0.001 * Carbono + 0.265 * ((Carbono)**2);
    }

    if (0.55 < Carbono && Carbono<= 0.65){
        return 0.115 + 0.268 * Carbono - 0.038 * ((Carbono)**2);
    }
    
    if (0.65 < Carbono && Carbono<= 0.75){
        return 0.143 + 0.2 * Carbono;
    }

    if (0.75 < Carbono && Carbono<= 0.90){
        return 0.062 + 0.409 * Carbono - 0.135 * ((Carbono)**2);
    }
}



function factManganeso(Manganeso){
    if (Manganeso === '' || isNaN(Manganeso) || Manganeso === 0)  {
        return 1;
    }

    if (Manganeso <= 1.20){
        return 3.3333 * Manganeso + 1 ;
    }

    if (1.20 < Manganeso && Manganeso <= 1.95){
        return 0.171 + 0.001 * Manganeso + 0.265 * ((Manganeso)**2);
    }

}


function factSilicio(Silicio){

    if (Silicio === '' || isNaN(Silicio) || Silicio === 0) {
        return 1;
    }

    if (Silicio <= 2){
        return 1 + 0.7 * Silicio;
    }
}


function factNiquel(Niquel){

    if (Niquel === '' || isNaN(Niquel) || Niquel === 0) {
        return 1;
    }

    if (Niquel <= 1.5){
        return 1 + 0.363 * Niquel;
    }

    if (1.5 < Niquel && Niquel <= 3.5){
        return 0.3211 + 1.4501 * Niquel - 0.6119 * ((Niquel)**2) + 0.1253 * ((Niquel)**3);
    }
}

function factCromo(Cromo){

    if (Cromo === '' || isNaN(Cromo)) {
        return 1;
    }

    if (Cromo <= 2.5){
        return 1 + 2.16 * Cromo;
    }
}


function factMolibdeno(Molibdeno){
   
    if (Molibdeno === '' || isNaN(Molibdeno) || Molibdeno === 0) {
        return 1;
    }

    if (Molibdeno <= 0.55){
        return 1 + 3 * Molibdeno;
    }

}


function factCobre(Cobre){
    
    if (Cobre === '' || isNaN(Cobre) || Cobre === 0) {
        return 1;
    }
    
    if (Cobre <= 0.55){
        return 1 + 0.365 * Cobre;
    }
}


function factVanadio(Vanadio){
    
    if (Vanadio === '' || isNaN(Vanadio) || Vanadio === 0) {
        return 1;
    }

    if (Vanadio <= 0.20){
        return 1 + 1.73 * Vanadio;
    }
}


function factZirconio(Zirconio){

    if (Zirconio === '' || isNaN(Zirconio) || Zirconio === 0) {
        return 1;
    }

    if (Zirconio <= 0.25){
        return 1 + 2.5 * Zirconio;
    }
}
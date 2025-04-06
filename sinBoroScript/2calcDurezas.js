export function mar50(Carbono){

    if (Carbono === '' || isNaN(Carbono)) {
        mensaje(2000);

    }else if(Carbono > 0.74){
        
        Carbono = 0.74
        return 21.93 + 27.153 * Carbono + 226.89 * (Carbono ** 2) - 717.17 * (Carbono ** 3) + 958.62 * (Carbono ** 4) - 491.25 * (Carbono ** 5);
        

    }else{
        return 21.93 + 27.153 * Carbono + 226.89 * (Carbono ** 2) - 717.17 * (Carbono ** 3) + 958.62 * (Carbono ** 4) - 491.25 * (Carbono ** 5);
    }
}


export function mar100(Carbono){

    if (Carbono === '' || isNaN(Carbono)) {
        mensaje(2000);

    }else if(Carbono > 0.7){
        
        Carbono = 0.7
        return 33.087 + 50.723 * Carbono + 33.662 * (Carbono ** 2) - 2.7048 * (Carbono ** 3) - 107.02 * (Carbono ** 4) + 43.523 * (Carbono ** 5) ;
    
    }else{
        return 33.087 + 50.723 * Carbono + 33.662 * (Carbono ** 2) - 2.7048 * (Carbono ** 3) - 107.02 * (Carbono ** 4) + 43.523 * (Carbono ** 5) ;
        }
    }

function mensaje (duracion){

    const toast =document.querySelector('#toast');
    toast.textContent = `Upps parece que olvidaste digitar la cantidad de Carbono del acero en cuestion, por favor vuelve a intentarlo.`;

    toast.style.display = 'block';
    // Reinicia la animación
    toast.style.animation = 'none';
    void toast.offsetWidth;
    toast.style.animation = null;

    setTimeout(() => {
        toast.style.display = 'none';
    }, duracion);
    
}

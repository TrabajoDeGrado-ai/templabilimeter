
function mensaje (elemento,max, duracion){
    const toast =document.querySelector('#toast')

    toast.textContent = `El rango de composicion permitido para el ${elemento} segun la norma ASTM A255-20a es hasta ${max}%, vuelva a intentarlo.`;
    toast.style.display = 'block'
    // Reinicia la animación
    toast.style.animation = 'none';
    void toast.offsetWidth;
    toast.style.animation = null;

    setTimeout(() => {
        toast.style.display = 'none';
    }, duracion);
}



const carbono = document.querySelector ('[name="Carbono"]');
carbono.addEventListener('input', function(){
    const valor = parseFloat(carbono.value);
    if (valor < 0 || valor > 0.9){
        mensaje('Carbono',0.9,1000);
        carbono.value ='';
    }

})


const Manganeso = document.querySelector ('[name="Manganeso"]');

Manganeso.addEventListener('input', function(){
    const valor = parseFloat(Manganeso.value)
    if (valor < 0 || valor > 1.95){
        mensaje('Manganeso',1.95,1000);
        Manganeso.value ='';
    }
})



const Silicio = document.querySelector ('[name="Silicio"]');

Silicio.addEventListener('input', function(){
    const valor = parseFloat(Silicio.value)
    if (valor < 0 || valor > 2){
        mensaje('Silicio',2,1000);
        Silicio.value ='';
    }
})


const Niquel = document.querySelector ('[name="Niquel"]');

Niquel.addEventListener('input', function(){
    const valor = parseFloat(Niquel.value)
    if (valor < 0 || valor > 3.5){
        mensaje('Niquel',3.5,1000);
        Niquel.value ='';
    }
})

const Cromo = document.querySelector ('[name="Cromo"]');

Cromo.addEventListener('input', function(){
    const valor = parseFloat(Cromo.value)
    if (valor < 0 || valor > 2.5){
        mensaje('Cromo',2.5,1000);
        Cromo.value ='';
    }
})

const Molibdeno = document.querySelector ('[name="Molibdeno"]');

Molibdeno.addEventListener('input', function(){
    const valor = parseFloat(Molibdeno.value)
    if (valor < 0 || valor > 0.55){
        mensaje('Molibdeno',0.55,1000);
        Molibdeno.value ='';
    }
})


const Cobre = document.querySelector ('[name="Cobre"]');

Cobre.addEventListener('input', function(){
    const valor = parseFloat(Cobre.value)
    if (valor < 0 || valor > 0.55){
        mensaje('Cobre',0.55,1000);
        Cobre.value ='';
    }
})

const Vanadio = document.querySelector ('[name="Vanadio"]');

Vanadio.addEventListener('input', function(){
    const valor = parseFloat(Vanadio.value)
    if (valor < 0 || valor > 0.2){
        mensaje('Vanadio',0.2,1000);
        Vanadio.value ='';
    }
})


const Zirconio = document.querySelector ('[name="Zirconio"]');

Zirconio.addEventListener('input', function(){
    const valor = parseFloat(Zirconio.value)
    if (valor < 0 || valor > 0.25){
        mensaje('Zirconio',0.25,1000);
        Zirconio.value ='';
    }
})
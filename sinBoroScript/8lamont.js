export function Lamont(mar50,durezas){
    const conjuntoJD = [[1/16,durezas[0]],[2/16,durezas[1]],[3/16,durezas[2]],[4/16,durezas[3]],[5/16,durezas[4]],[6/16,durezas[5]],[7/16,durezas[6]],[8/16,durezas[7]],[9/16,durezas[8]],[10/16,durezas[9]],[12/16,durezas[10]],[14/16,durezas[11]],[16/16,durezas[12]],[18/16,durezas[13]],[20/16,durezas[14]],[24/16,durezas[15]],[28/16,durezas[16]],[32/16,durezas[17]]]
    if (mar50 > conjuntoJD[17][1]){
        const [anterior,siguiente,sup,inf] = buscarDureza(mar50,conjuntoJD)
        let DistanciaJ = interpolacion(anterior,sup,siguiente,inf,mar50)
        let [H1,HInfinito] = lamontMedioEnfriamiento(DistanciaJ)
        return [H1,HInfinito]
    }else{
        let mensajeDeVuelta = `No es posible calcular el diametro ideal por el metodo Jominy.<br>
        Cualquier diametro templado en agua tendra un temple efectivo.` 
        return[mensajeDeVuelta,1]
    }
}




function buscarDureza(mar50,conjuntoJD){
    console.log(mar50)
    for (let i = 0; i < conjuntoJD.length - 1; i++) {
       

        const anterior = conjuntoJD[i][1];
        const siguiente = conjuntoJD[i + 1][1];
        console.log(anterior,siguiente)
        
        if (mar50 <= anterior && siguiente <= mar50 ) {
            console.log( anterior,siguiente,conjuntoJD[i][0],conjuntoJD[i+1][0])
           return [anterior,siguiente,conjuntoJD[i][0],conjuntoJD[i+1][0]]
        }
    }
    
    }




function interpolacion(x0, y0, x1, y1, x){
    return y0 + ((y1 - y0) / (x1 - x0)) * (x - x0);

}



function lamontMedioEnfriamiento(DistanciaJ){
    let H1 = (-0.8522 *DistanciaJ**2) + 4.4449 *DistanciaJ + 0.1399
    // let HInfinito = (-1.048 * DistanciaJ**2) + 4.8761 * DistanciaJ + 0.8007

    let HInfinito = (-0.9979 * DistanciaJ**2) + 4.764 * DistanciaJ + 0.809

    return [H1,HInfinito]
}
// x = (3/4)

// y = (-0.8522 * x**2) + 4.4449 * x + 0.1399   h = 1

// x = (0.8472222222)

// y = (-1.048 * x**2) + 4.8761 * x + 0.8007  h = infinito
// print(y)
// lo que quiero hacer es: quiero que se halle el mar50, despues con ese mar 50 buscamos la distancia jominy, despues esa distancia jominy, seria x en la ecuacion de lamont, y despues hallamos y que seria el diametro 



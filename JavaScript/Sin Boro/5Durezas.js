export function calcularDurezas(m100,FactoresJ){
    const durezas = [m100];
    for (let fac of FactoresJ){
        // console.log(`el factor es ${fac} y dureza maxima ${m100}`)
        durezas.push(m100/fac);
    }
    return durezas
    
} 

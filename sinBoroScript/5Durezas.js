export function calcularDurezas(m100,FactoresJ){
    const durezas = [m100.toFixed(1)];
    
    for (let fac of FactoresJ){
        // console.log(`el factor es ${fac} y dureza maxima ${m100}`)
         
        let d = m100/fac;
    
        durezas.push(d.toFixed(1));
    }
    return durezas
    
} 

export function factJominy(Di){
    let fac2 = dos(Di);
    let fac3 = tres(Di);
    let fac4 = cuatro(Di);
    let fac5 = cinco(Di);
    let fac6 = seis(Di);
    let fac7 = siete(Di);
    let fac8 = ocho(Di);
    let fac9 = nueve(Di);
    let fac10 = diez(Di);
    let fac12 = doce(Di);
    let fac14 = catorce(Di);
    let fac16 = diesiseis(Di);
    let fac18 = diesiocho(Di);
    let fac20 = veinte(Di);
    let fac24 = ventiCuatro(Di);
    let fac28 = ventiOcho(Di);
    let fac32 = treintayDos(Di);

    return [fac2,fac3,fac4,fac5,fac6,fac7,fac8,fac9,fac10,fac12,fac14,fac16,fac18,fac20,fac24,fac28,fac32]
}


function dos(Di){
    if (Di <= 2.1){
        
        return 4.68961 - 11.00832 * Di + 13.83314 * Di**2 - 8.80283 * Di**3 + 2.78698 * Di**4 - 0.34880 * Di**5;

    }else{
      
        return 1;
    
    }
}

function tres(Di){
    
    if (Di <= 3.1){

        return 2.34904 - 0.28254 * Di - 1.42995 * Di**2 + 1.16697 * Di**3 - 0.33813 * Di**4 + 0.03403 * Di**5;
    
    }else{
    
        return 1;
    
    }
}

function cuatro(Di){
    
    if (Di <= 4.1){

        return  5.66795 - 6.14648 * Di + 3.52874 * Di**2 - 1.06026 * Di**3 + 0.16301 * Di**4 - 0.01015 * Di**5;

    }else{
    
        return 1;
    
    }
}

function cinco(Di){
    
    if (Di <= 4.4){

        return  4.52902 - 2.90739 * Di + 0.986508 * Di**2 - 0.163586 * Di**3 + 0.012095 * Di**4 - 0.000257202 * Di**5;

    }else{
    
        return 1;
    
    }
}

function seis(Di){
    
    if (Di <= 5.0){

        return  4.39436 - 2.16072 * Di + 0.56027 * Di**2 - 0.08145 * Di**3 + 0.00840 * Di**4 - 0.000530827 * Di**5;

    }else{
    
        return 1;
    
    }
}

function siete(Di){
    
    if (Di <= 5.3){

        return  4.15002 - 1.43154 * Di + 0.00235893 * Di**2 + 0.112947 * Di**3 - 0.0237546 * Di**4 + 0.00150903 * Di**5;

    }else{
    
        return 1;
    
    }
}

function ocho(Di){
    
    if (Di <= 5.6){

        return  4.44473 - 1.79085 * Di + 0.24617 * Di**2 + 0.03378 * Di**3 - 0.01189 * Di**4 + 0.000841843 * Di**5;

    }else{
    
        return 1;
    
    }
}

function nueve(Di){
    
    if (Di <= 5.8){

        return  4.95421 - 2.43521 * Di + 0.62983 * Di**2 - 0.07914 * Di**3 + 0.00399154 * Di**4 - 0.0000120363 * Di**5;

    }else{
    
        return 1;
    
    }
}

function diez(Di){
    
    if (Di <= 6.1){

        return  5.31610 - 2.80977 * Di + 0.84183 * Di**2 - 0.141781 * Di**3 + 0.0130138 * Di**4 - 0.000512388 * Di**5;

    }else{
    
        return 1;
    
    }
}

function doce(Di){
    
    if (Di <= 6.6){

        return  5.63649 - 2.89264 * Di + 0.90309 * Di**2 - 0.17297 * Di**3 + 0.01881 * Di**4 - 0.00086593 * Di**5;

    }else{
    
        return 1;
    
    }
}

function catorce(Di){

    return  5.83176 - 2.99646 * Di + 0.94088 * Di**2 - 0.17734 * Di**3 + 0.0183885 * Di**4 - 0.000790018 * Di**5;

}

function diesiseis(Di){

    return  6.06952 - 3.15198 * Di + 0.99297 * Di**2 - 0.18010 * Di**3 + 0.0172029 * Di**4 - 0.000664079 * Di**5;

}

function diesiocho(Di){

    return  7.32018 - 4.60605 * Di + 1.68442 * Di**2 - 0.338443 * Di**3 + 0.0345114 * Di**4 - 0.00138927 * Di**5;

}

function veinte(Di){
    
    return  7.81382 - 5.10022 * Di + 1.921410 * Di**2 - 0.394591 * Di**3 + 0.040784 * Di**4 - 0.00165327 * Di**5;

}

function ventiCuatro(Di){
    
    return  9.18138 - 6.69048 * Di + 2.75891 * Di**2 - 0.611613 * Di**3 + 0.0677165 * Di**4 - 0.002930700 * Di**5;

}

function ventiOcho(Di){
    
    return  9.27904 - 6.21461 * Di + 2.33158 * Di**2 - 0.46972 * Di**3 + 0.0472654 * Di**4 - 0.00186035 * Di**5;

}

function treintayDos(Di){
    
    return  8.62857 - 5.16125 * Di + 1.81214 * Di**2 - 0.35489 * Di**3 + 0.035687 * Di**4 - 0.001434 * Di**5;
}


export function plot(durezas,mar50){
    const facJ = [1/16,2/16,3/16,4/16,5/16,6/16,7/16,8/16,9/16,10/16,12/16,14/16,16/16,18/16,20/16,24/16,28/16,32/16]


    const etiquetasx =['1/16','2/16','3/16','4/16','5/16','6/16','7/16','8/16','9/16','10/16','12/16','14/16','16/16','18/16','20/16','24/16','28/16','32/16']

    const datosPlot =[{
        x: facJ,
        y: durezas,
        type:'scatter',
        mode: 'lines+markers',
        marker: {size: 8,
        color: 'orange',  // Puntos en rojo brillante
        line: { width: 2, color: 'black' }, }, // Contorno negro en 
        line: {width: 3,
            color: 'gold'},
        connectgaps: true
    }];

    const personalizar ={
        title: {
            text: 'Curva Jominy', font:{ family: 'Arial Black', size: 30, color: 'black' }},
        width: 590,  // Ancho en píxeles
        height: 440, // Alto en píxeles   
        margin: { l: 80, r: 10, t: 80, b: 80 },
        
        xaxis: {
            title: 'Distancia (in)',
            titlefont: { size: 16, color: 'black' },
            tickfont: { size: 14, color: 'black' },
            tickvals: facJ, //son los valores que voy a graficar en el eje x
            ticktext: etiquetasx, //son los valores que apareceran en el eje x
            tickmode: 'array',
            // type: 'category', 
            showgrid: false,  // Quitar rejilla
            zeroline: false

            
        },
        yaxis: {
            range: [0,70],
            title: 'Durezas (HRC)',
            titlefont: { size: 16, color: 'black' },
            tickfont: { size: 14, color: 'black' },
            showgrid: false
        },
        plot_bgcolor: 'rgba(255, 255, 255, 0.7)',  // Fondo oscuro semitransparente
        paper_bgcolor: 'white',  // Fondo negro
        hovermode: 'closest'  // Mejor interacción al pasar el cursor
            
    };

    return [datosPlot,personalizar];


}
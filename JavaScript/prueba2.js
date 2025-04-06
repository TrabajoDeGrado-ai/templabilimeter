
// let agua = 0.6;
// let crema  = 1;
// let heladix = 1.6;
// let heladovich = 1.7;
// let helardo = 1.8;
// let confites = 2.9;
// let pote = 2.9

// let helados = [agua,crema,heladix,heladovich,helardo,confites,pote];

// let numero = 4;
// //do {
// //    document.write(numero + " hola <br>");
// //    numero++
// //}
// //while (numero<10) 

// for (let i = 0; i< numero+1; i++){
//     document.write('esta es la repeticion numero ' + i + '<br>')
// }
// let animales = ['perro', 'gato', 'loro', 'tiranosaurio'];
// for (let animal in animales){
//     document.write(animal + '<br>');
// } 

// document.write('<br>');


// for (let animal of animales){
//     document.write(animal + '<br>');
// } 

// document.write('<br>');

// let list_1 = ['persona1','persona2','persona3']
// let list_2 = ['animal1','animal2',list_1,'animal3']

// forperro:
// for (let list in list_2){
//     if (list == 2){
//         for (let list of list_1){
//             document.write(list+ '<br>')
//             break forperro 
//         }
//     }else{
//         document.write(list_2[list]+ '<br>' )
//     }
// }

// function nombre  (){
//     respuesta = prompt('cual es su nombre');
//     return respuesta; 
// }

// let tuNombre = nombre();

// alert(`hola ${tuNombre}`);

// function suma (a,b){
//     return a+b;
// }

// resultado = suma(45,25);

// alert (`la suma es ${resultado}`)
// document.write(resultado)

// const restar = (a,b)=> {
//     return a-b
// }
// document.write('<br>')

// document.write(restar(10,6))

// const pregunta = ()=>{
//     return prompt('que edad tienes pajero');
// }



// const mayorDeEdad = (edad)=>{
//     if (edad >=18){
//         document.write('puedes pasar pajero');
//     }else{
//         document.write('no puedes pasar pajero');
//     }
// }

// mayorDeEdad(pregunta());

// class carro {
//     constructor(modelo,marca,color,traccion){
//         this.modelo = modelo;
//         this.marca = marca;
//         this.color = color;
//         this.traccion = traccion;
//         this.info = `El carro ${this.marca} es del año ${this.modelo} de color ${this.color} y tiene traccion ${this.traccion}`;
//     }
//     verInfo(){
//         document.write(this.info + '<br>');
//     }
// }

// let carro1 = new carro('1998','toyota','rojo','4x4');
// let carro2 = new carro('2004','toyota','verde','normal');

// carro1.verInfo();

// class celulares{
//     constructor (color, peso, rdp, rdc, ram){
//         this.color = color;
//         this.peso = peso ;
//         this.rdp = rdp;
//         this.rdc = rdc;
//         this.ram = ram
//         this.encendido = false;
//     }
//     BotonEncendidoApagado(){
//         if (this.encendido == false){
//             document.write('celular prendido'+ '<br>');
//             this.encendido = true;
//         }else{
//             document.write('celular apagado'+ '<br>');
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true){
//             document.write('reiniciando celular'+ '<br>');
//         }else{
//             document.write('El celular esta apagado'+ '<br>');
//         }
//     }
//     tomarFoto(){
//         document.write(`se esta tomando una foto a una resolucion de ${this.rdc}`+ '<br>');
//     }
//     grabarVideo(){
//         document.write(`grabando video a ${this.rdc}`+ '<br>');
//     }
//     mostrarInfo(){
//         return `color: <b>${this.color}</b><br>
//         peso: <b>${this.peso}</b><br>
//         rdp: <b>${this.rpd}</b><br>
//         rdc: <b>${this.rpc}</b><br> 
//         ram: <b>${this.ram}</b><br>
//         `
//     }
// }

// let celular1 = new celulares('rojo',150,5,'full hd', '2GB');
// let celular2 = new celulares('negro',100,3.5,'full hd', '6GB');
// let celular3 = new celulares('blanco',150,5.5, 'hd', '9GB');

// document.write(celular1.mostrarInfo() + '<br>')
// document.write(celular2.mostrarInfo()+'<br>')
// document.write(celular3.mostrarInfo()+'<br>')

// celular1.BotonEncendidoApagado();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.BotonEncendidoApagado();
// celular1.reiniciar();

// let cadena = 'Hola Como Estas       ';
// let cadena2 = [25,'hola'];
// // let mensaje = 'es';

// // document.write(cadena.concat(mensaje)+ '<br>');
// // document.write(cadena.startsWith(mensaje)+'<br>');
// // document.write(cadena.endsWith(mensaje)+'<br>');
// // document.write(cadena.includes(mensaje)+'<br>');
// // document.write(cadena.indexOf(mensaje)+'<br>');
// // document.write(cadena.padEnd(mensaje));


// let resultado = cadena.split(',');
// let resultado2 = cadena.substring(0,10);
// let resultado3 = cadena.toLowerCase();
// let resultado4 = cadena.toUpperCase();
// let resultado5 = cadena2.toString();
// let resultado6 = cadena.length;
// let resultado7 = cadena.trim(); 



// document.write(resultado7.length);
// let animales = ['perro', 'aveztruz', 'gato', 'gallina', 'zorro']

// let resultado = animales.pop()
// document.write(resultado + '<br>')
// let resultado2 = animales.push('lobo')
// let resultado = animales.shift()
// let resultado = animales.push('juandedio')
// let resultado = animales.reverse()
// let resultado = animales.unshift('sapo')
// let resultado = animales.sort()
// let resultado = animales.splice(1,2, ' juandedio', 'pedrito')
// let resultado = animales.join('  <br> ')
// let resultado = animales.slice(0)

// resultado = animales.filter(animal=>(animal[1] == 'a' ))


// document.write(resultado + '<br>')
// document.write(animales + '<br>')



// ID	#	document.querySelector("#miID")
// Clase	.	document.querySelector(".miClase")
// Etiqueta	nombre	document.querySelector("p")
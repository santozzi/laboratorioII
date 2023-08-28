export class Boton{
    constructor(document,texto){
     this.boton = document.createElement('button');
     this.boton.appendChild(document.createTextNode(texto));
     console.log("hola");
    }
    getBoton(){
     return this.boton;
    }
 }
class Boton{
    constructor(document,texto){
     this.boton = document.createElement('button');
     this.boton.appendChild(document.createTextNode(texto));
     console.log("hola");
    }
    getBoton(){
     return this.boton;
    }
 }

({
    
    "jsdom": {"file": "./src/pruebasjs.html"} // Located in project root
})
/*
function saludar(){
    alert("hola");
    document.getElementById("etiqueta").innerHTML = ""
}

//es un elemento
let elementByID = document.getElementById('parrafo1');
elementByID.innerHTML = 'por id';
//es un arreglo
let elementoPorClass = document.getElementsByClassName('parrafos');
elementoPorClass[0].innerHTML = 'Sergio';
console.log(elementoPorClass.length);
//elemento por etiqueta
let elementoByEtiqueta = document.getElementsByTagName('p');

//modificar estilos
elementByID.style.background ='black';
elementByID.style.color ='white';
elementByID.style.width = '150px';
elementByID.style.textAlign = 'center';
elementByID.style.height='50px'
elementByID.style.display = 'flex';
elementByID.style.alignItems ='center';
elementByID.style.justifyContent='center';
let boton = document.createElement('button');
const newContent = document.createTextNode("soy un text node");
//const click = document.addEventListener("cick",()=>alert("soy un click"));
boton.appendChild(newContent);
boton.onclick = ()=>alert("soy un click");
const currentDiv = document.getElementById("parrafo1");
//document.body.insertBefore(boton,currentDiv);
document.body.insertAdjacentElement("afterend",boton);
*/
const currentDiv = document.getElementById("parrafo1");

const boton = new Boton(this.document,"sergio");
const boton1 = new Boton(this.document,"boton1");


document.body.insertBefore(boton.getBoton(),currentDiv);
document.body.insertBefore(boton1.getBoton(),boton.getBoton());







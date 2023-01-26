// Tipo de dato string
var nombre = "Chistian David";
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numérico
var edad = 36;
console.log(edad);
console.log(typeof edad);

//Tipo de dato objeto
var objeto = {
    nombre : "Christian David",
    apellido : "Telias Camacho",
    edad : 36
}
console.log(typeof objeto);

// Tipo de dato boolean
var booleano = true;
console.log(booleano);
console.log(typeof booleano);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol();
console.log(typeof simbolo);

//Tipo de dato clase, es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo de dato Underfine
var x;
console.log(typeof x);

//Tipo de dato Null (ausencia de valor, tipo object)
var nulo = null;
console.log(typeof null);

//Tipo de dato arrays, son tipo object
var autos = ["Ferrary" , "Audi", "Mercedez"];
console.log(autos);
console.log(typeof autos);


// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

function Persona(nombre, edad, sexo, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

let nombre;
    
do{
    nombre = prompt("Nombre: ");
} while (nombre == parseInt(nombre))

let edad;

do{
    edad = prompt("Edad: ")
} while(edad != parseInt(edad))


let sexo;

do{
    sexo = prompt("Sexo: ")
    
} while (sexo != "H" && sexo != "M" && sexo != "O")

let peso;

do{
    peso = prompt("Peso: ")
} while (peso != parseInt(peso));

let altura;

do{
    altura = prompt("Altura: ")
} while (altura != parseFloat(altura));

let persona = new Persona(nombre, edad, sexo, peso, altura);

alert(JSON.stringify(persona))

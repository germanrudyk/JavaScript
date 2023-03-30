// Escribir un programa para obtener un array de las propiedades de un objeto Persona. 
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

class Persona{
    constructor(nombre, edad, sexo, peso, altura)
    {
        let opc;
        this.nombre = nombre;
        this.edad = edad;
        if(sexo === "H"){
            opc = "Hombre";
        }
        else if(sexo === "M"){
            opc = "Mujer";
        } else {
            opc = "Otro";
        }
        this.sexo = opc;
        this.peso = peso;
        this.altura = altura;
    }
}

let persona = new Persona("Mariano", 33, "H", 85, 1.98);

const array = Object.values(persona);

alert(array);
//Escribir una función que reciba un String y devuelva la palabra más larga. 
//String Ejemplo: “Guia de JavaScript”
//Resultado esperado : “JavaScript”

function palabraMasLarga(){

    let frase = prompt("Escriba una frase");

    return frase.split(" ").sort((a,b)=>b.length-a.length)[0];

}

alert(palabraMasLarga());


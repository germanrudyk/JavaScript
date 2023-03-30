// Escribir una función flecha que reciba una palabra y la devuelva al revés.

let palabra = prompt("Escribe una palabra");
let palabraInvertida = "";

let resultado = (palabra) => {
    for (let i = palabra.length; i > 0; i--){
        palabraInvertida += palabra.substring(i,i-1);
    }
    return palabraInvertida;
};

alert(`${resultado(palabra)}`);


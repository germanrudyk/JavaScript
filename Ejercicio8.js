// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
// todos ellos. 

var numeros = [];
var valor;
var valorTemporal;

do{
    valorTemporal = prompt("Ingrese un valor distinto de 0: ");
    valorTemporal = parseInt(valorTemporal);
    if(valorTemporal == 0){
        break;
    }
    valor = valorTemporal;
    while (valor != parseInt(valor)){
        valorTemporal = prompt("Valor incorrecto, vuelva a ingresar: ");
        valorTemporal = parseInt(valorTemporal);
        if(valorTemporal == 0){
           break;
        }
        valor = valorTemporal;
    }
    numeros.push(valor);
} while (valor != 0);

function buscarValorMin(numeros) {

    let min;

    for(let i = 0; i < numeros.length; i++){
        if (i == 0){
            min = numeros[i];
            continue;
        }
        if (numeros[i] < min){
            min = numeros[i];
        }
    }

    return min;
}

function buscarValorMax(numeros) {

    let max;

    for(let i = 0; i < numeros.length; i++){
        if (i == 0){
            max = numeros[i];
        }
        if (numeros[i] > max){
            max = numeros[i];
        }
    }

    return max;

}

function calcularPromedio(numeros){

    let suma = 0;

    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }

    return suma / numeros.length;

}

let min = buscarValorMin(numeros);
let max = buscarValorMax(numeros);
let promedio = calcularPromedio(numeros);

alert(`El valor mínimo es ${min}`);
alert(`El valor máximo es ${max}`);
alert(`El promedio de todos los valores es ${promedio}`);
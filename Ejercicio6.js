// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

let numero;

do{
    numero = prompt("Ingrese un numero: ");
    numero = parseInt(numero);
} while(numero != parseInt(numero));

if(numero == 0){
    alert("El numero no es par ni impar");
} else if (numero % 2 == 0){
    alert("El numero es par");
} else {
    alert("El numero es impar");
}

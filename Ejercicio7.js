// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
// solicite números al usuario hasta que la suma de los números introducidos supere el 
// límite inicial. 

let limite;

do{
    limite = prompt("Escriba un valor limite");
    limite = parseInt(limite);
} while (limite != parseInt(limite));

var acumulado = 0;
var agregado;

while (acumulado <= limite){
    agregado = prompt("Ingrese valor a sumar: ");
    agregado = parseInt(agregado);
    while (agregado != parseInt(agregado)){
        agregado = prompt("Dato incorrecto, vuelva a ingresar: ");
        agregado = parseInt(agregado);
    }
    acumulado += agregado;
}

alert("Se ha superado el valor limite");





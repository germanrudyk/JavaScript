// Construir un programa que simule un menú de opciones para realizar las cuatro 
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
// numéricos enteros. El usuario, además, debe especificar la operación con el primer 
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 

var valor1, valor2;

do {
    valor1 = prompt("Ingrese el primer valor: ");
    valor2 = prompt("Ingrese el segundo valor: ");
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
} while (valor1 != parseFloat(valor1) || valor2 != parseFloat(valor2));

let operacion;

do{

    operacion = prompt("Ingrese con su caracter la operacion que desee realizar: ");
    operacion = operacion.toUpperCase();

} while (operacion != "S" && operacion != "R" && operacion != "M" && operacion != "D");

switch (operacion){
    case 'S':
        let suma = valor1 + valor2;
        alert(`La suma de los valores es ${suma}`);
        break;
    case 'R':
        let resta = valor2 - valor1;
        alert(`La resta entre los valores es ${resta}`);
        break;
    case 'M':
        let multiplicacion = valor1 * valor2;
        alert(`La multiplicacion de los valores es ${multiplicacion}`);
        break;
    case 'D':
        let division = valor1 / valor2;
        alert(`La division de los valores es ${division}`);
        break;
}
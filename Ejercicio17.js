// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
// resultado

let arreglo = [];

for(let i = 0; i < 6; i++){
    arreglo.push(prompt("Ingrese un dato al arreglo: "));
}

let eliminarDosElementos = () => {
    let aux = arreglo;
    aux.pop();
    aux.pop();
    return aux;
}

alert(`El arreglo original contiene: ${JSON.stringify(arreglo)}`)

alert(`El arreglo final contiene: ${JSON.stringify(eliminarDosElementos())}`);
// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
// dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2];

// a)

let elementoMasLargo = (valores) => {

    var strings = [];

    valores.forEach(elemento => {
        if (typeof elemento === "string"){
            strings.push(elemento);
        }
    });

    
   let resultado;

    for(let i = 0; i < strings.length; i++){
        if (i == 0){
            resultado = strings[i];
            continue;
        }
        if(strings[i].length > resultado.length){
            resultado = strings[i]
        }
    }
    

    return resultado;

}

alert(`El elemento de texto mas largo es ${elementoMasLargo(valores)}`);

// b)


let primerBooleano;
let segundoBooleano;

if (valores[1] > valores[5]){
    primerBooleano =  valores[0];
}
if (valores[1] < valores[5]){
    
} else {
    segundoBooleano = valores[2];
}


alert(`El primer resultado booleano es ${primerBooleano}`);

alert(`El segundo resultado booleano es ${segundoBooleano}`);


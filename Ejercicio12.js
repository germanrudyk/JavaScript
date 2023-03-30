// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de 
// dato.

let valor = prompt("Ingrese un dato");

let retorno = (valor) => {
    if (valor == parseInt(valor)){
        return "number"
    } else if (valor === "true" || valor === "false"){
        return valor
    } else {
        return typeof valor
    }
}

alert(retorno(valor));
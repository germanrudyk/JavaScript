// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y 
// muestre el siguiente array [6, 9, 12, 15, 18]. 

let matriz = [[3], [6], [9], [12], [15]];

let array = (matriz) => {
    let vector = new Array;
    for(let i = 0; i < matriz.length; i++){
        vector[i] = matriz[i][0] + 3;
    }
    return vector;
}

alert(JSON.stringify(array(matriz)));
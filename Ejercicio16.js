// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios 
// y los muestre por pantalla.

let vector1 = [];

let vector2 = [];

for(let i = 0; i < 5; i++){
    vector1.push(Math.floor(Math.random() * 10));
    vector2.push(Math.floor(Math.random() * 10));
}

vector1 = JSON.stringify(vector1);
vector2 = JSON.stringify(vector2);

alert(`Vector 1: ${vector1} || Vector 2: ${vector2}`);
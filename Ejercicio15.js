// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
// radio del círculo lo proporcionará el usuario.

class Circulo {
    constructor(radio){
        this.radio = radio;
    }
}

var circulo = new Circulo();

do{
    circulo.radio = prompt("Escribe el radio del circulo: ");
} while (circulo.radio != parseFloat(circulo.radio));

function calcularArea() {
    return Math.PI * Math.pow(circulo.radio, 2);
}

function calcularPerimetro() {
    return 2 * Math.PI * circulo.radio;
}

alert(`El area del circulo es ${calcularArea()}`);

alert(`El perimetro del circulo es ${calcularPerimetro()}`);






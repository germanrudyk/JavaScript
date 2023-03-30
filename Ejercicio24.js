// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un 
// circulo y lo muestre en el HTML.

const boton = document.getElementById("boton");
var resultado = document.getElementById("resultado")

boton.addEventListener("click", function()  {
    let area = document.getElementById("area").value;
    let radio = Math.sqrt(area/Math.PI);
    radio = parseFloat(radio);
    resultado.innerHTML = `El resultado es: <strong style="background-color: yellow;">${radio}</strong>`;
    return false;  
});
 








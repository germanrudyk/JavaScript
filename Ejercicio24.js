// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un 
// circulo y lo muestre en el HTML.

const boton = document.getElementById("boton");


boton.addEventListener("click", function()  {
    let area = document.getElementById("area").value;
    let radio = Math.sqrt(area/Math.PI);
    alert(`El radio del circulo es: ${radio}`);
    return false;
    
});









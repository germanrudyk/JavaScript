// Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del 
// siguiente formulario.

 let getFormValores=()  => {

    const formulario = document.getElementById("form1");

    var nombre = formulario.elements['nombre'].value;
    var apellido = formulario.elements['apellido'].value;

    alert(`Nombre: ${nombre}
Apellido: ${apellido}`);

    return false;

}


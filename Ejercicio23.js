// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo 
// amarillo, por ejemplo)

let texto = document.getElementById("parrafo");

let arreglo = texto.innerHTML.split(" ");

let contenido = "";

arreglo.forEach(palabra => {

    if(palabra.length > 8){
        contenido += `<span style='background-color:yellow;'>${palabra}</span> `
    } else {
        contenido += `${palabra} `
    }

});

texto.innerHTML = contenido;
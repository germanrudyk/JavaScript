// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de 
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que 
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario. 

let respuesta = prompt("Como esta el dia de hoy?")

while(respuesta != "soleado" && respuesta != "nublado" && respuesta != "lloviendo"){

    alert("Respuesta incorrecta.")
    respuesta = prompt("Conteste nuevamente: ")

}

alert(`El dia de hoy esta ${respuesta}`)
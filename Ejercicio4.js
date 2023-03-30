// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario 
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla 
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. 

let respuesta = prompt("Ingrese el caracter 'S' o 'N': ");

while (respuesta != "S" && respuesta != "N"){

    alert("INCORRECTO")
    respuesta = prompt("Vuelva a ingresar: ");

}

alert("CORRECTO");
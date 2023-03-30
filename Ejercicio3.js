// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de 
// edad se debe mostrar un mensaje indicándolo. 

let edad;

do{
    edad = prompt("Ingrese su edad: ");

if(edad >= 18){
    alert(`Sos mayor de edad`);
} else if(edad < 18){
    alert(`Sos menor de edad`);
} else {
    alert("Dato incorrecto")
}
} while (edad != parseInt(edad));


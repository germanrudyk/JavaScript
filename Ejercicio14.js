// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
// numero de páginas

function Libro(ISBN, titulo, autor, numPaginas){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
}

let ISBN;
let titulo;
let autor;
let numPaginas;

function cargarLibro (ISBN, titulo, autor, numPaginas) {
    do{
        ISBN = prompt("ISBN: ")
    } while(ISBN != parseInt(ISBN))
    
    
    
    do {
        titulo = prompt("Titulo: ")
    } while (titulo == parseInt(titulo))
    
    
    
    do {
        autor = prompt("Autor: ")
    } while (autor == parseInt(autor));
    
    
    
    do{
        numPaginas = prompt("Numero de páginas: ")
    } while(numPaginas != parseInt(numPaginas))

    return new Libro(ISBN, titulo, autor, numPaginas);

}

let mostrarDatos = (ISBN, titulo, autor, numPaginas) => {

    let libro = cargarLibro(ISBN, titulo, autor, numPaginas);

    return alert(JSON.stringify(libro));

}

mostrarDatos(ISBN, titulo, autor, numPaginas);


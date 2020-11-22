'use strict'
// Cargar el documento en la pantalla
window.addEventListener('load' , () => {
// Creando una variable para llamar al formulario
let formulario = document.querySelector("#formulario");
//let box_dashed = document.querySelector(".dashed");


formulario.addEventListener('submit' , () => {
 console.log("Devolviendo el Evento Submit");


 let nombre = document.querySelector("#Nombre").value;
 let apellido = document.querySelector("#Apellido").value;
 let edad = parseInt( document.querySelector("#Edad").value);

// Validando Formulario
if(nombre == "" || nombre.lenght == ""){
    alert(" El nombre no es valido ");
    return false;
}
if(apellido.trim() == "" || apellido.trim().lenght == 0){
    alert(" El apellido no es valido ");
    return false;
}
if(edad == "" || edad == "" || isNaN(edad)){
    alert(" La Edad esta incorrecta ");
    return false;
}
// Pasando los nombre al siguiente div
let p_nombre = document.querySelector("#p_nombre span");
let p_apellido = document.querySelector("#p_apellido span");
let p_edad = document.querySelector("#p_edad span");

p_nombre.innerHTML = nombre;
p_apellido.innerHTML = apellido;
p_edad.innerHTML = edad;


});

});

// Esto aqui es un objeto JSON asi es como se compone dentro de un array
var Peliculas = [
    {
    Titulo : "Batman" ,
    Year : 2020,
    Pais : " Estados Unidos"
}];

 var Caja_Pelicula = document.querySelector("#peliculas");
 var index
 for (index in Peliculas)
 {
     var p = document.createElement("p")
     p.append(Peliculas[index].Titulo + " " + Peliculas[index].Year);
     Caja_Pelicula.append(p);
 }
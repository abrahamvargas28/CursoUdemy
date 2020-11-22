'use strict'

// LocalStorage

// Comprobar Disponibilidad del LocalStorage
if(typeof(Storage) !== 'undefined')
{
    console.log("Disponible");
} else{
    console.log("No Disponible");
}

// Guardar elementos en el LocalStorage

localStorage.setItem("Nombre" , " Abraham"),
localStorage.apellido = 'vargas';

// Sacar los elementos del localStorage
 let FirstName = localStorage.getItem("Nombre"),
    LastName = localStorage.apellido;
document.write("Mi nombre es:  " +  FirstName + " " + LastName);

// Sacando un JSON en el localstorege

// Creamos el JSON
var usuarios = {
 Nombre : "abraham",
 Apellido : "Vargas",
 Email: "vargasabraham4@gmail.com",
 Edad : 28,
};

// Mnadamos los datos al localStorage
localStorage.setItem("usuarios" , JSON.stringify(usuarios));
 let userjs = JSON.parse(localStorage.getItem("usuarios"));
 console.log(userjs);

 // Traer los datos y monstrarlos en la pagina
 document.querySelector("#peliculas").append(" " + userjs.Nombre + " - " + userjs.Email);
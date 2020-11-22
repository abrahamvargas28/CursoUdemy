'use strict'

// Verificar si el LocalStorage esta funcionando
if(typeof(Storage) !== 'undefined')
{
    console.log("Disponible");
} else{
    console.log("No Disponible");
}


console.log(a);
console.log(b);

// Insertar las peliculas en el localStorage
let Movies = document.querySelector("#FormPeliculas");
Movies.addEventListener('submit' , () => {
    
    let titulo = document.querySelector("#addPeliculas").value;
    let titulo2 = document.querySelector("#addPeliculas2").value;
                
        localStorage.setItem(titulo , titulo);
        localStorage.setItem(titulo2, titulo2);
});



// Hacer que aparescan las peliculas insertadas
var ul = document.querySelector("#Peliculas-list")
var index;
for (index in localStorage)
{   
    if (typeof localStorage[index] == "string") {
    var li = document.createElement("li");
    li.append(localStorage[index]);
    ul.append(li);
    }
    
}

// Borrar los elementos
let BorrarMovies = document.querySelector("#BorarPeliculas");
BorrarMovies.addEventListener('submit' , () => {
   
        let titulo = document.querySelector("#BorarPelicula").value;
        localStorage.removeItem(titulo);
    

});




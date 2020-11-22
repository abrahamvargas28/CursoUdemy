'use strict'
// Eventos del raton

let boton = document.getElementById("Boton");


boton.addEventListener('mouseover' , function(){
    boton.style.background = "blue";
});

boton.addEventListener('mouseout' , function(){
    boton.style.background = "red";
});
    // Click
boton.addEventListener('click' , function(){
boton.style.background = "yellow";
});


        // EVENTOS DEL TECLADO

let input = document.getElementById("Campo_Nombre");

// Evento focus sirve para montrar lo que esta dentro del input
input.addEventListener('focus' , () => {
console.log(" Estas dentro del focus ");
});

// Evento blur
input.addEventListener('blur' , function(){
console.log("Estas dentro del blur");
} );

// Evento keydown , keyup , keypress
// string.fronCharCode(event.keycode) capturea los datos del evento
input.addEventListener('keydown' , function(event){
console.log(" Estas Precionando la tecla " + String.fromCharCode(event.keyCode));
});

// EL evento load se utiliza para el tiempo
/*
window.addEventListener('load' , () => {

    // Timers

let Tiempo = setInterval(() => {

    console.log(" Cargando el metodo load a esta pagina!");

    let Encabezado = document.querySelector("h1");
    if (Encabezado.style.fontSize == "50px") {
        Encabezado.style.fontSize = "30px"

    }else{
        Encabezado.style.fontSize = "50px";
    }
}, 3000);

});

// Eventos para inicar y para algo

Para para algun evento que tengas activo puedes utilizar clearInterval(Nombre de la variable que le asignaste 
    la funcion);

*/
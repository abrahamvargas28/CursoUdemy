'use strict'

// DOM Document Object Model

function CambiarColor(color){
    Color.style.background = color;
    
}

let Color = document.querySelector("#cambiar");

Color.innerHTML = " Cambie el texto que tenia anterior por este"


// Conseguir todos los elementos por su etiqueta
var TodosLosDiv = document.getElementsByTagName("div");
TodosLosDiv [2].innerHTML = "Me cambiaron el nombre"

// COnseguir elementos por su clase css

var divRojos = document.getElementsByClassName('rojo');
var divVerdes = document.getElementsByClassName('verde');
divVerdes[0].style.background = "green";
divVerdes[1].style.background = "green";
let div;
for(div in divRojos)
{
    if (divRojos[div].className == ('rojo') )
    {
        divRojos[div].style.background = ('red');
    }
}



console.log(divRojos);





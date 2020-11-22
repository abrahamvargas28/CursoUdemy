// Array , Arreglos y matrices

// Declarando un array


/*
var nombre = ["abraham" , "manuel" , "alejandro" , "belkis"];
var apellidos = new Array("vargas" , "matos" , "moreales" , "reynoso");

var elementos = parseInt(prompt("Introduce el indice que quieres imprimir? "));
/*
if (elementos >= nombres.length)
{
    alert(" introduce un valor menor que " + nombres.length);
} else  {
    alert(nombres[elementos]);
}
*/

//              2   

/*
document.write("apellidos de los familiares");

 Metodo for para llamar a un array


document.write("<ul>")
for (let index = 0; index < apellidos.length; index++) {
  document.write( "<li>" + apellidos[index] + "</li>");

}*/
//                3

// Metodo forEach para llamar a una lista de array
/*
apellidos.forEach((elemento , indice)=>{
document.write( "<li>" + indice + " - " + elemento + "</li>");
});
document.write("</ul>")
*/
//              4

// Array Multudimensionales : Meter los arrays declarados dentro de un solo array.

/*
let combinacion = [nombres , apellidos];

console.log(combinacion[1][3]);
*/


                5

   // Metodos para buscar y aprender (push , pop , splice)

    //Push : Se utiliza para meter otro dato al array


var elemento = "";

do {
    var elemento = prompt("introduce tu nombre ");
    nombres.push(elemento);
    
} while (elemento != "final");

console.log(nombres);


/*
Convertir un string en un array
con split puedo cambiar un string a un array
var cadena = ( texto1 , texto2 , texto 3);
var cadena = cadena.split(", ");

ordenar el array alfabeticamente .sort();
ordenar el array alrevez . reverse();
Encontrar un ARRAY find.Index(variable => variable)
*/

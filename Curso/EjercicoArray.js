/*
1.hacer un programa que pida 6 numeros por pantalla y los metas en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en el console
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostralo
5. mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, y que nos diga si esta en el array y su indice.
*/

// Creando una funcion para llamar el array

function mostrarArray(elementos , textoCustom = "")
{
    document.write(" Los elementos del array " + textoCustom);
    debugger;
    document.write("<ul>");
    elementos.forEach((elemento, indice) => {
        document.write( "<li>" + indice + " - " + elemento + "</li>");
        });
    document.write("</ul>");
}


// Pedir los 6 numeros
let numeros = [];
for (let i = 0; i <= 5; i++) {
     numeros.push(parseInt(prompt("introduce un numero")));
}

// Mostrar en la pantalla
mostrarArray(numeros);

// Mostrar en la consola
console.log(numeros);

// Ordenarlo
numeros.sort(function(a ,b ) {return a - b });
mostrarArray("ordenados" + numeros);

// Invertir su orden
let revertir = numeros.reverse();
console.log(revertir + " revertido ");

// Mostrar cuantos elementos tiene el array
let cantidad = numeros.length;
console.log(" elementos : " + cantidad);


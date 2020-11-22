'use strict'
/*
     Hacer una tabla de multiplicar

*/

    // Declaracion de la variable para introducir la variable
var numero = parseInt(prompt('Introduzca el numero multiplicado'));
    // Mostrar el numero de la tabla que voy a multiplicar 
document.write(" <h1> tabla del " + numero + "</h1>");
    //Ciclo for mientras que la variable i sea menor que 10 sumale 1 a i
for (var i = 1; i <= 10; i++)
{
        // Muestrame en Pantalla la Multiplicacion
    document.write(i + ' x ' + numero + ' = ' + (i*numero) + '<br/>');
}

    // Todas las tablas de multiplicar
    for (var a = 1; a <= 10; a++)
    {
        document.write(" <h1> tabla del " + a+ "</h1>");
        for (var i = 1; i <= 10; i++)
        {
            document.write(i + ' x ' + a + ' = ' + (i*a) + '<br/>');
        }
        
    
    }
    

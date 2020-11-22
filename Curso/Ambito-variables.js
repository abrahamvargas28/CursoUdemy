'use strict'

var VariableGlobal = " Esto es una variable global puedo llamarla fuera de la funcion" // variable global 

function holamundo(prueba)
{
    
    var VariableLocal = " Esto es una variables local , solo funcina adentro de la funcion" // Variable local
    console.log(prueba); // llamando al parametro prueba local
    console.log( VariableLocal);

}
holamundo(VariableGlobal)






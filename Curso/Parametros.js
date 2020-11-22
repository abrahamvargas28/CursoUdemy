
'use strict'
  document.write ("Parametros REST y SPREAD </br>");
  "</br>"

  // Este es el parametro REST : se utiliza para completar el array de los datos que introduzcas
  // Lista de Nombres 
function ListadoDeNombres(Nombre1 , Nombre2 ,...Resto_de_nombres)
{
        console.log("Nombre1: " , Nombre1);
        console.log("Nombre2: " , Nombre2);
        console.log(Resto_de_nombres);
}
// Listado de frutas 
function ListaDeFrutas( fruta1 , fruta2 , ...Demas_frutas)
{
    document.write ("Fruta1: "  , fruta1 +"</br>");
    document.write("Fruta2: " , fruta2 + "</br>");
    document.write("Las demas frutas son: " , Demas_frutas);
}
ListadoDeNombres("Jose" , "Manuel" , "Alejandro" , "Mario" , "Belkis");
ListaDeFrutas("Manzana" , "Pera" , "Mango" ,"Guineo" ,"Uva" , "Naranja"  );

// Este es el Parametro SPREAD

//var nombre  = ["Jose" , "Manuel"];
//ListadoDeNombres ( ...nombre , "Alejandro" , "Pedro" , "Manuela");

// Funcioanes anonimas y callbacks
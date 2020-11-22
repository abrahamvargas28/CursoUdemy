// Funcion anonima , es una funcion que no tiene nombre.
// callback : es una funcion que funciona dentro de otra function

// Funciones flecha

function sumame (numero1 , numero2 , sumaYmuestra , SumaPorDos) //--> Parametros
{
    var suma = numero1 + numero2;
   
    sumaYmuestra(suma);
    SumaPorDos(suma);
     return suma;
}

sumame( 10,40, dato => {
    console.log("la suma es: " + dato);
} ,
dato => {
    console.log("la suma por dos es: " + (dato*2));
}
);



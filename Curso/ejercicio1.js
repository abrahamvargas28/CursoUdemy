
// Ejercicios programa que nos pida dos numeros y que nos diga cual es mayor el menor y si son iguales.

// Declarando la variables 
var numero1 = parseInt(prompt ("Introduce un numero" ));
var numero2 = parseInt(prompt("Introduce el otro numero"));

// ciclo while Para que Cuando Coloquemos un numero menor a 0 no Coja nada
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1 || isNaN(numero2)))
{
     numero1 = parseInt(prompt ("Introduce un numero" ));
     numero2 = parseInt(prompt("Introduce el otro numero"));
}

if (numero1 == numero2)
{
    alert('Los numeros son iguales');
} else if(numero1 > numero2)
{
    alert("El numero mayor es: " + numero1);
    alert('El numero menor es:' + numero2);
} else if (numero2 > numero1)
{
    alert('El numero mayor es:' + numero2);
    alert('El numero menor es: ' + numero1);
} else {
    alert('Introduce un valor correcto');
}

// Muestrame el numero en pantalla
console.log(numero1,numero2);
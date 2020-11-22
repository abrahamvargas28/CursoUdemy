/*
    Calculadora
*/


var numero1 = parseInt(prompt(' Ingrese un numero: '));
var numero2 = parseInt(prompt(' Ingrese otro numero'));


while( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2))
{
    var numero1 = parseInt(prompt(' Ingrese un numero: '));
    var numero2 = parseInt(prompt(' Ingrese otro numero:'));
    
}
document.write('<h2> Calculadora </h2>')
var resultado = 'la suma es ' + (numero1+numero2) + '<br/>' +
                'la resta es ' + (numero1-numero2) + '<br/>' +
                ' la multiplicacion es ' + (numero1*numero2) + '<br/>' +
                ' la division es ' + (numero1/numero2) + '<br/>';

    document.write(resultado);
   
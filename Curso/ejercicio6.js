/*
  Como hacer el arbolito de navidad
*/

var nSpace = 18
var index = 0

// Ciclo for
for ( var i = 6; i >= 0; i = i-1)
{
    var asteriscos =[]
    let space =[]

    if ( i == 6)
    {
        for ( var j = nSpace; j >= nSpace / 2; j--) space.push(" ")
        console.log(space.join(" " + " * "))
    } else 
    {
        for ( var j = nSpace; j >= nSpace/2; j--) space.push(" ")
        for ( var j =1; j <= index; j ++) asteriscos.push("***")
    }
    console.log(space.join("") + "/" + asteriscos.join("") + "\\")
    index++
    nSpace-= 3
}

var fline = []
for (var i =0 ; i <=21; i++)
fline.push("_")
console.log(fline.join(""))

for (var i =0; i <=2; i++)
{
    let space = []
    for (var j =0; j <=2; j++) space.push(" ")
    console.log(space.join("")+"|   |")
}

// acceder a los elementos de un array
document.write ("<h1>Elementos de un array</h1>")
const numbers = [1, 2, 3, 4, 5]
document.write("el arreglo de su primera posicion es: "+numbers[0]+"<br>")
document.write("el arreglo en la posicion es: "+numbers[2]+"<br>")


// usar variables para acceder a los elementos de una array 

let index = 4

document.write("la  variable index corresponde a: "+numbers[index+"<br>"])

//modificar los elementos de un array 

numbers[0] = 10
numbers[2] = 30

document.write("el array modificado es: "+numbers+"<br>")


//longitud de un array 
document.write("<h3>LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
document.write("el array de frutas es: "+frutas+"<br>")
document.write("el array de frutas tiene una longitud de: "+frutas.length+"<br>")

// acceder a los elementos de un array
document.write ("<h1>Elementos de un array</h1>")
const numbers = [1, 2, 3, 4, 5]
document.write("el arreglo de su primera posicion es: "+numbers[0]+"<br>")
document.write("el arreglo en la posicion es: "+numbers[2]+"<br>")


// usar variables para acceder a los elementos de una array 

let index = 4

document.write("la  variable index corresponde a: "+numbers+[index+"<br>"])

//modificar los elementos de un array 

numbers[0] = 10
numbers[2] = 30

document.write("el array modificado es: "+numbers+"<br>")


//longitud de un array 
document.write("<h3>LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
document.write("el array de frutas es: "+frutas+"<br>")
document.write("el array de frutas tiene una longitud de: "+frutas.length+"<br>")

//Metodos de un array
document.write ("<h2>Metodos de un array</h2>")
const Frutas = ["plátano", "fresa"]
Frutas.push("naranja")
document.write("el array de frutas es:  "+Frutas+"<br>")

//.pop()
document.write("<h3>.pop()</h3>")
const FRutas = ["plátano", "fresa", "naranja"]
const ultimaFRuta = FRutas.pop()

document.write("el array de fruta es: "+FRutas+"<br>") 
document.write("La ultima fruta de array es: "+ultimaFRuta+"<br>")

// .shift()
document.write("<h3>.shift()</h3>")
const FRUtas = ["plátano", "fresa", "naranja"]
const primeraFRUta = FRUtas.shift()

document.write("el array de la fruta es: "+FRUtas+"<br>") 
document.write("La primera fruta del array es: "+primeraFRUta+"<br>")

// .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:

document.write("<h3>.unshift()</h3>")
const FRUTas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

document.write("el array de la fruta es: "+frutas+"<br>")

// CONCATENAR ARRAYS 

document.write("<h2>CONCATENAR ARRAYS</h2>")
document.write("<h3>Podemos concatenar dos arrays usando el método concat()</h3>")

const num = [1,2,3]
const num2 = [4,5]

const allnumbers = num.concat(num2)

document.write ("los arrays concatenados son: "+allnumbers+"<br> ")

//concatenar de otra forma 

document.write("<h2>CONCATENAR ARRAYS USANDO EL OPERADOR ...</h2>")

const numb = [1, 2, 3]
const numb2 = [4, 5]

const allNumbers = [...numb, ...numb2]

document.write("los arrays concatenados son: "+allNumbers+"<br>")

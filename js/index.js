
console.log("Hello world!")

// Distintas formas de declarar una variable (o constante??)
 // SCOPE === ALCANCE

// var -> scope global (y puede ser modificada sin querer, desde otros archivos)

// ES2015 ->
// let -> scope de bloque, nos dá mejor control de la variable
// const -> Scope de bloque, pero a diferencia de let "NO SE PUEDE REASIGNAR UN VALOR!"

var a = "hola"
console.log(a)
a = "chau"
console.log(a)
if (true) {
    console.log(a)
}

let b
console.log(b);
b = 55
console.log(b);
if (true) {
    console.log(b)
}

const c = 99
console.log(c)
console.log(c.toString())

// Condiciones -> Comparaciones igual, mayor, menor, etc. => Devuelve un valor BOOLLEANO (false / true)
const condition1 = 1 === "1" // Exactamente igual (igual en valor + igual en tipo)
const condition2 = 1 == "1" // Simplemente igual (igual en valor)
console.log("condition1", condition1)
console.log("condition2", condition2)

const condition3 = 5 > 6
const condition4 = 5 < 6
const condition5 = 4 >= 4
const condition6 = 3 <= (1 + 2)
console.log("condition3", condition3)
console.log("condition4", condition4)
console.log("condition5", condition5)
console.log("condition6", condition6)

// Operaciones matematicas.
let suma = 10 + 30
const resta = 25 - 14
const multipl = 7 * 8
const division = 49 / 7

console.log("suma", suma)
console.log("resta", resta)
console.log("multipl", multipl)
console.log("division", division)

// Acumulador
console.log("Acumulador", ++suma)

// Mètodo concatenación de Strings
const saludo = "Hola"
const saludoCompleto = saludo.concat(" como estas?")

console.log("saludoCompleto", saludoCompleto)

// Bloques y Bucles -> Estructas repetitivas

const x = 8
const y = 8

if (x > y) {
    console.log("x es mayor a y")
} else if (y > x) {
    console.log("y es mayor a x")
} else {
    console.log("Los valores son iguales")
}

// let ovejas = 0
// console.log("Cantidad de ovejas", ovejas)
// ++ovejas
// console.log("Cantidad de ovejas", ovejas)
// ++ovejas
// console.log("Cantidad de ovejas", ovejas)

for (let ovejas = 0; ovejas < 50; ovejas++) {
    if (ovejas % 2 === 0) { // Operacion matem -> Modulo
        console.log("Cantidad de ovejas", ovejas)
    }
}

// Concatenar strings
const userName = "Pedro Ezequiel"

// const greeting = "Hola " + userName + ", bienvenido!"
// const greeting = "Hola ".concat(userName).concat(", bienvenido!")
const greeting = `Hola ${userName}, bienvenido!`

console.log(greeting)
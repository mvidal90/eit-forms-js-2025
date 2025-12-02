
const a = 5
const b = 7
const c = 10

// const suma1 = a + b
// const suma2 = b + c
// const suma3 = a + c

// console.log(suma1)
// console.log(suma2)
// console.log(suma3)

// Funcion es una porción de código que nos será de utilidad varias veces en nuestro proyecto

function suma(x, y) {
    const result = x + y
    console.log(result)
}

suma(a, b)
suma(b, c)
suma(a, c)

const d = 100
const e = 4
const f = 0
const g = 75

function division(param1, param2) {
    if (param2 === 0) {
        console.error("No se puede dividir por cero (0).")
        return;
    }
    const result = param1 / param2
    console.log(result)
}

division(d, e)
division(g, d)
division(d, f)

// Arrow functions

const sumaArrow = (x, y) => {
    const result = x + y
    console.log(result)
}

sumaArrow(a, b)
sumaArrow(b, c)
sumaArrow(a, c)

const simpleArrowFunc = param => {
    console.log(param)
} 

simpleArrowFunc("Hola!!")

// Tenemos dos tipos de funciones
// 1. "void" (Ejecutan simplemente un código) (suma -> ln 16)
// 2. Retornan (o devuelven un valor)

// 2.

function resta(x, y) {
    const result = x - y
    return result
}

const restaArrow = (x, y) => x - y

const resultResta = resta(d, a)
console.log(resultResta)

const resultRestaArrow = restaArrow(d, a)
console.log(resultRestaArrow)

const resultSuma = suma(g, e)
console.log(resultSuma)
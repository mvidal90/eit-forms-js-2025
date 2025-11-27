
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

// DOM -> Document Object Model
// Objeto que se llama "documento"

const subtitle = document.getElementById("subtitle")
console.log(subtitle)

// if (subtitle !== null) { // diferente en valor y tipo
if (subtitle) { // Si trae algo -> true si es "", 0, undefined o null -> falso
    subtitle.innerHTML = "<span style='color: violet'>Por favor,</span> complete el fomulario."
    subtitle.style.textDecoration = "underline"
}

const inputs = document.getElementsByClassName("field-element")

console.log(inputs)

// Operador not

const number = 0

if (!!number) {
    console.log("Soy un numero negativo")
}

// simplemente diferente (solo valor) -> !=
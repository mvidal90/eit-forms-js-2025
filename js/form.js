

const handleSubmit = (event) => {
    event.preventDefault()
    const values = {};
    const inputs = document.getElementsByClassName("field-element")

    for (let i = 0; i < inputs.length; i++) {
        const field = inputs[i];
        values[field.name] = field.value
        field.value = "Pedro2"
    }

    console.log("Mensaje enviado:", values)
}

const color = window.prompt("Ingrese un color:")

console.log(color)

const isConfirm = window.confirm("Desea revisar apellidos?")

console.log(isConfirm)
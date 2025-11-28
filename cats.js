
const catsQuantity = 10

for (let cat = 1; cat <= catsQuantity; cat++) {
    const catString = "Gato #"
    const catWithNumber = catString.concat(cat).concat(": ")
    let catComplete;
    if (cat % 3 === 1) {
        catComplete = catWithNumber.concat("😺")
    } else if (cat % 3 === 2) {
        catComplete = catWithNumber.concat("😸")
    } else {
        catComplete = catWithNumber.concat("😹")
    }
    console.log(catComplete)
}

const catsSteps = 5

for (let cat = 1; cat <= catsQuantity; cat++) {
    const catString = "Gato #"
    const catWithNumber = catString.concat(cat).concat(": ")
    let catComplete;

    if (cat % 2 === 0) {
        catComplete = catWithNumber.concat("🐈‍⬛")
    } else {
        catComplete = catWithNumber.concat("🐈")
    }

    for (let steps = 1; steps <= catsSteps; steps++) {
        catComplete = catComplete.concat("🐾")
    }

    console.log(catComplete)
}
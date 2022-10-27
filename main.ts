input.onButtonPressed(Button.A, function () {
    nombre_de_gens += 1
    if (9 < nombre_de_gens) {
        basic.showString("Avertissement")
    }
})
input.onButtonPressed(Button.AB, function () {
    nombre_de_gens = 0
})
input.onButtonPressed(Button.B, function () {
    nombre_de_gens += -1
})
let nombre_de_gens = 0
basic.showNumber(0)
basic.forever(function () {
    basic.showNumber(nombre_de_gens)
})

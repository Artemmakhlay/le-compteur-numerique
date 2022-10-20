let nombre_de_gens = 0
input.onButtonPressed(Button.A, function () {
    nombre_de_gens += 0 + 1
    basic.showNumber(nombre_de_gens)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    nombre_de_gens += 0 - 1
    basic.showNumber(nombre_de_gens)
    nombre_de_gens += 1
})

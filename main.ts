input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 644)
        basic.pause(500)
    }
})
let Kalenderlys = 3
basic.forever(function () {
    basic.showNumber(Kalenderlys)
    basic.pause(86400000)
    Kalenderlys += 1
})

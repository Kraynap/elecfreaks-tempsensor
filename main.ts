let vol = 0
let tem = 0
basic.forever(function () {
    vol = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    3300
    )
    tem = vol - 500 / 10
    basic.showNumber(tem)
})

input.onButtonPressed(Button.A, function () {
    sleep_time = sleep_time - 50
    if (sleep_time < 0) {
        sleep_time = 0
    }
})
input.onButtonPressed(Button.B, function () {
    sleep_time = sleep_time + 50
    if (500 < sleep_time) {
        sleep_time = 500
    }
})
let sleep_time = 0
sleep_time = 100
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(sleep_time)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(sleep_time)
})

radio.onReceivedString(function (receivedString) {
    if (receivedString == "Ahoj") {
        radio.sendString("Hi!")
    }
})
radio.setGroup(1)
let count = 0
let text_list = ["Kiwi", "Lemon", "Mango"]
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(250)
    led.unplot(0, 0)
    basic.pause(250)
    count += 1
    if (count >= 20) {
        radio.sendString("" + (text_list[randint(0, 2)]))
        count = 0
        led.toggle(2, 2)
    }
})

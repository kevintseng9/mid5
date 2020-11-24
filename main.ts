let X = 0
input.onButtonPressed(Button.A, function () {
    X = randint(0, 10)
    basic.showNumber(X)
    if (X >= 6) {
        basic.showString("win")
    } else {
        basic.showString("lose")
    }
})
basic.forever(function () {
	
})

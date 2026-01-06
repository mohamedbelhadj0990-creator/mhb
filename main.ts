input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 999; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Bonne année ")
    basic.pause(100)
    basic.showNumber(2026)
})
basic.forever(function () {
	
})

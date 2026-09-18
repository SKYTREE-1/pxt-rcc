input.onButtonPressed(Button.A, function () {
    リモコン扇風機.電源を入れる()
})
input.onButtonPressed(Button.B, function () {
    リモコン扇風機.電源を消す()
})
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)

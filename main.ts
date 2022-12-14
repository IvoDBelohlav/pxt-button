let number1 = 4
while (true) {
    let buttonispressedA = input.buttonIsPressed(Button.A)
    let buttonispressedB = input.buttonIsPressed(Button.B)

    if (buttonispressedA) {
        number1 +=1
    }

    if (buttonispressedB) {
        number1 -=1
    }
    (number1)
   
    whaleysans.showNumber(number1)
}
let makej1 = function(){
number1-= 1
basic.pause(10)
whaleysans.showNumber(number1)
}
let makej2 = function () {
    number1 += 1
    basic.pause(10)
    whaleysans.showNumber(number1)
}
input.onButtonPressed(Button.A, makej1)
input.onButtonPressed(Button.B, makej2)






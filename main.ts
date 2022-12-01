let number1 = 4
let number2 = 5


let makejA = function(){
            number1 += 1
    whaleysans.showNumber(number1)
}
   let makejB= function(){   
    number1 -= 1
     whaleysans.showNumber(number1)
   }

   
input.onButtonPressed(Button.A, makejA)
input.onButtonPressed(Button.B, makejB)

input.onButtonPressed(Button.A, function () {
    number1 += 1
    whaleysans.showNumber(number1)
input.onButtonPressed(Button.B, function () {
    number1 -= 1
    whaleysans.showNumber(number1)
})




// while (true) {
//     let buttonispressedA = input.buttonIsPressed(Button.A)
//     let buttonispressedB = input.buttonIsPressed(Button.B)


//     if (buttonispressedA) {
       
//         number1 +=1
//     }

//     if (buttonispressedB){

//         number1 -= 1
//     }
//     whaleysans.showNumber(number1)

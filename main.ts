/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus
 * Created on: Oct 2025
 * This program gets a randomNumber 
*/

// variables

let randomNumber1 : number = randint(0, 99)
let randomNumber2 : number = randint(0, 99)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showNumber(randomNumber1)
})

input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showNumber(randomNumber2)
})

input.onGesture(Gesture.Shake, function() {
    if (randomNumber1 > randomNumber2) {
    basic.showString(randomNumber1 + '>' + randomNumber2)
} else {
        basic.showString(randomNumber1 + '<' + randomNumber2)
}
})

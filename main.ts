/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus
 * Created on: Oct 2025
 * This program gets and Shows randomNumbers 
*/

// variables

let randomNumber1 = 0
let randomNumber2 = 0

// Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// 
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    randomNumber1 = randint(0, 99)
    randomNumber2 = randint(0, 99)
    basic.showIcon(IconNames.Yes)
})

// Show randomNumber1
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber1)
})

// Show randomNumber2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber2)
})

// Compare the two numbers
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randomNumber1 > randomNumber2) {
        basic.showString(randomNumber1.toString() + ">" + randomNumber2.toString())
    } else if (randomNumber1 < randomNumber2) {
        basic.showString(randomNumber1.toString() + "<" + randomNumber2.toString())
    } else {
        basic.showString(randomNumber1.toString() + "=" + randomNumber2.toString())
    }
})

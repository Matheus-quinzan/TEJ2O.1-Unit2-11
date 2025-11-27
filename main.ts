/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus
 * Created on: Oct 2025
 * This program gets and Shows randomNumbers 
*/

// variables

let randomNumber1: number = randint(0, 99)
let randomNumber2: number = randint(0, 99)

// Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Shows randomNumber1
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber1)
})

// Shows randomNumber2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber2)
})

// Shows if randomNumber1 is bigger or smaller than randomNumber2
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

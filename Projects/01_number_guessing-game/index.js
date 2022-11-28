"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    console.log('Guess a number between 0 and 50');
    var randomNum = Math.floor(Math.random() * 51);
    var attempts = 0;
    while (true) {
        var guessedNumber = (0, readline_sync_1.question)('Guess the number:\n');
        var isNum = isValidNum(guessedNumber);
        if (isNum) {
            if (parseInt(guessedNumber) === randomNum) {
                console.log("You won in ".concat(attempts, " attempts."));
                break;
            }
            else if (parseInt(guessedNumber) < randomNum) {
                console.log("Your guess was too low. Try again\n");
                attempts++;
            }
            else if (parseInt(guessedNumber) > randomNum) {
                console.log("Your guess was too high. Try again\n");
                attempts++;
            }
        }
        else {
            console.log('Please enter a number only!');
        }
    }
}
function isValidNum(num) {
    return !isNaN(Number(num));
}
main();

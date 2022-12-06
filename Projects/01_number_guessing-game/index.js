#! /usr/bin/env node
import { question } from 'readline-sync';
function main() {
    console.log('Guess a number between 0 and 50');
    const randomNum = Math.floor(Math.random() * 51);
    let attempts = 0;
    while (true) {
        const guessedNumber = question('Guess the number:\n');
        const isNum = isValidNum(guessedNumber);
        if (isNum) {
            if (parseInt(guessedNumber) === randomNum) {
                console.log(`You won in ${attempts} attempts.`);
                break;
            }
            else if (parseInt(guessedNumber) < randomNum) {
                console.log(`Your guess was too low. Try again\n`);
                attempts++;
            }
            else if (parseInt(guessedNumber) > randomNum) {
                console.log(`Your guess was too high. Try again\n`);
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

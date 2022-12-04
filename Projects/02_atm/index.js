#! /usr/bin/env node
/*
1-Welcome to ATM
2-Enter your card
3-Enter your pin
4-Select your accout type
5-Enter amount
6-Print receipt
7-Thank you
*/
import inquirer from 'inquirer';
const Welcome = () => {
    console.log('Welcome to ATM');
    EnterCard();
};
const EnterCard = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'card',
            message: 'Enter your card'
        }
    ]).then((answers) => {
        EnterPin();
    });
};
const EnterPin = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'pin',
            message: 'Enter your pin'
        }
    ]).then((answers) => {
        SelectAccount();
    });
};
const SelectAccount = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'account',
            message: 'Select your account type',
            choices: ['Currenet', 'Saving']
        }
    ]).then((answers) => {
        EnterAmount();
    });
};
let amount = 0;
const EnterAmount = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'amount',
            message: 'Enter your amount'
        }
    ]).then((answers) => {
        amount = answers.amount;
        PrintReceipt();
    });
};
const PrintReceipt = () => {
    console.log('Print receipt');
    console.log(`You have successfuly withdrawn ${amount}`);
    ThankYou();
};
const ThankYou = () => {
    console.log('Thank you');
};
Welcome();

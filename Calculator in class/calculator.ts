import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const welcome = (msg: string) => {
    console.log(chalk.bgCyan(msg))
//    let wmsg= chalkAnimation.rainbow(msg)
//    setTimeout(() => {
//     wmsg.stop()
// }
//     , 1000)
}
welcome('Welcome to a CLI calculator')

async function userInput() {
    const answer = await inquirer.prompt([
        {
            name: 'fistNumber',
            message: 'Enter first Number',
            type: 'number',
            validate: function (input) {
                if (isNaN(input)) {

                    return 'Not a valid Number'

                } else {
                    return true;
                }
            },
        },
        {
            name: 'Operation',
            message: 'choose an operation',
            type: 'list',
            choices: ["+", "-", '/', '*']
        },
        {
            name: 'secondNumber',
            message: 'Enter second Number',
            type: 'number',
            validate: function (input) {
                if (isNaN(input)) {
                    return 'Not a valid Number'

                } else {
                    return true;
                }
            },
        }
    ])

    var rslt: number = 0;
    switch (answer.Operation) {
        case "+":
            rslt = answer.fistNumber + answer.secondNumber
            break
        case "-":
            rslt = answer.fistNumber - answer.secondNumber
            break
        case "*":
            rslt = answer.fistNumber * answer.secondNumber
            break
        case "/":
            rslt = answer.fistNumber / answer.secondNumber
            break
        }
    console.log(chalk.blueBright(`The result is ${rslt}`))

}

let askagain=true;
do{
    await userInput()
   let user_answer=await inquirer.prompt([
        {
            name: 'again',
            message: 'Do you want to calculate again?',
            type: 'confirm',
        }
    ])
        if(user_answer.again){
            askagain=true
        }else{
            askagain=false;
        }
   
}while(askagain)
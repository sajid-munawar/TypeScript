#! /usr/bin/env node
/*
1-Print todo list
2-Add todo task
3-Mark a task as complete
3-Remove/delete a task
*/
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
const welcomeTodo = async () => {
    await figlet('Todo List', (err, data) => {
        if (err) {
            console.log('Something went wrong...');
        }
        console.log(chalk.green(data));
    });
};
await welcomeTodo();
let todoList = ['Meeting with HR', 'Setup Production', 'Announce a feature'];
const main = async () => {
    let q1 = await inquirer.prompt([{
            name: 'q1',
            type: "list",
            message: 'What do you want to do?\n',
            choices: [
                'Print todo list',
                'Add todo tas',
                'Mark a task as complete',
                'Remove/delete a completed task'
            ]
        }
    ]);
    return q1.q1;
};
setTimeout(async () => {
    let q1 = await main();
    console.log(q1);
}, 1000);

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
                'Add todo task',
                'Mark a task as complete',
                'Remove/delete a completed task',
                'Exit'
            ]
        }
    ]);
    return q1.q1;
};
const addTodo = async (todoList) => {
    let userAnswer = await inquirer.prompt([{
            name: 'newTodo',
            type: 'input',
            message: 'Please add a todo'
        }]);
    todoList.push(userAnswer.newTodo);
    return todoList;
};
const action = async () => {
    setTimeout(async () => {
        let q1 = await main();
        switch (q1) {
            case 'Print todo list':
                for (let i = 0; i < todoList.length; i++) {
                    console.log(chalk.yellow(`${i + 1}-${todoList[i]}`));
                }
                await action();
                break;
            case 'Add todo task':
                todoList = await addTodo(todoList);
                await action();
                break;
            case 'Exit':
                console.log(chalk.blue('Thank you for using todo list app.'));
            default:
                break;
        }
    }, 500);
};
await action();

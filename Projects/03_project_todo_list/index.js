#! /usr/bin/env node
/*
1-Print todo list
2-Add todo task
3-Mark a task as complete
3-Remove/delete a task
*/
console.clear();
import chalk from 'chalk';
import figlet from 'figlet';
figlet('Todo List', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
    }
    console.log(chalk.green(data));
});

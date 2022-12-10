#! /usr/bin/env node


import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';

const welcomeMsg=async()=>{
    await figlet('Currency Converter',(err,data)=>{
        if(err){
            console.log('Something went wrong...');
        }
        console.log(chalk.green(data));
        
    })
    
}

await welcomeMsg();
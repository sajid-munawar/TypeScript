#! /usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
// import currency_list from './currencies.js';

const welcomeMsg=async()=>{
    await figlet('Currency Converter',(err,data)=>{
        if(err){
            console.log('Something went wrong...');
        }
        console.log(chalk.yellow(data));        
    })    
}

await welcomeMsg();

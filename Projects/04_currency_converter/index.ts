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
        console.log(chalk.green(data));        
    })    
}

await welcomeMsg();

let currencies_list=['PKR','USD','EUR','JPY','GBP','CNY','AUD','CAD','SAR']

const baseCurr=async()=>{
    let base=await inquirer.prompt([{
        name:'base'
    }])
}

const main=async()=>{
    setTimeout(()=>{
        console.log('==>',currency_list);
    },1000)
}

await main();


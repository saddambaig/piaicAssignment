import inquirer from 'inquirer'
import sum from './sum.js' 
import minus from './minus.js' 
import multiple from './multiple.js' 
import divide from './divide.js' 
import chalk from 'chalk'
import showBanner from 'node-banner'
const numbers=await inquirer.prompt([
    {
        name:"firstNumber",
        type:'number',
        message:"Enter First Number: ",
        
    },
    {
        name:"secoundNumber",
        type:"number",
        message:"Enter Secound Number",
        
    },
    {
        name:"operation",
        type:"checkbox",
        message:"Select Operation: ",
        choices:['+','-','*','/']
    }
])
switch(numbers.operation[0]){
    case "+":
        showBanner('Operatinon End');
        let result=sum(numbers.firstNumber,numbers.secoundNumber);
        console.log(`Result :  ${chalk.bold.bgBlueBright(result)}`);
        break;
    case "-":
        showBanner('Operatinon End');
        let res=minus(numbers.firstNumber,numbers.secoundNumber);
        console.log(`Result :  ${chalk.bold.bgBlueBright(res)}`);
        break;
    case "*":
        showBanner('Operatinon End');
            let mres=multiple(numbers.firstNumber,numbers.secoundNumber)
            console.log(`Result :  ${chalk.bold.bgBlueBright(mres)}`);
            break;
    case "/":
        showBanner('Operatinon End');
        let mdivide=divide(numbers.firstNumber,numbers.secoundNumber);
        console.log(`Result :  ${chalk.bold.bgBlueBright(mdivide)}`);
        break;
    default:
        console.log('invalid');
        break;
}


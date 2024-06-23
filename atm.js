#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000000000000000000; //Dollaar
let myPin = 9898;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Your Pin Code is Correct ✔ ");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please Select The Option:",
            choices: ["withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount:",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
        else {
            console.log("Your Balance is insufficient");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastcash = await inquirer.prompt({
            name: "cashAmount",
            type: "list",
            message: "Select The Amount :",
            choices: ["100", "1000", "3000", "5000"],
        });
        if (myBalance >= fastcash.cashAmount) {
            myBalance -= fastcash.cashAmount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
        else {
            console.log("Your Balance is insufficient");
        }
    }
}
else {
    console.log("Your Pin is incorrect");
}

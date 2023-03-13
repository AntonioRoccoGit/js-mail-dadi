//selezioniamo gli elementi del dom da utilizzare
//game section
const computerDiceElem = document.getElementById("pc-dice");
const userDiceElem = document.getElementById("user-dice"); 
//result
const resault = document.querySelector(".result-area");
console.log(resault.classList); 
//call to action 
const callToAction = document.getElementById("call-to-action");
console.log(callToAction); 
// number generator
let computerDiceNumber = Math.floor(Math.random() * 6 + 1);
let userDiceNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerDiceNumber, userDiceNumber);

//selezioniamo gli elementi del dom da utilizzare
//game section
const computerDiceElem = document.getElementById("pc-dice");
const userDiceElem = document.getElementById("user-dice"); 
//result
const resault = document.querySelector(".resault-area");
console.log(resault.classList); 
//call to action 
const callToAction = document.getElementById("call-to-action");
console.log(callToAction); 
// number generator
let computerDiceNumber = Math.floor(Math.random() * 6 + 1);
let userDiceNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerDiceNumber, userDiceNumber);
//inseriamo il valore dei dadi nel nonsto documento
computerDiceElem.innerHTML = computerDiceNumber;
userDiceElem.innerHTML += userDiceNumber;
//verifichaimo la condizione di vincita
if (userDiceNumber > computerDiceNumber){
    resault.innerHTML = "Complimenti hai vinto"
}
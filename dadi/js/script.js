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

//qui avevo due soluzioni per rendere il tutto interattivo
//potevamo assegnare un reload al call to action per refreshare la pagina
//possiamo creare una function da assegare al call to action
//procederemo con la strada apparentemente piu complicata, ma sicuramente piu ottimizzata

callToAction.addEventListener("click", function(){
    // number generator
    let computerDiceNumber = Math.floor(Math.random() * 6 + 1);
    let userDiceNumber = Math.floor(Math.random() * 6 + 1);
    //inseriamo il valore dei dadi nel nonsto documento
    computerDiceElem.innerHTML = computerDiceNumber;
    userDiceElem.innerHTML = `Tuo Dado <br> ${userDiceNumber}`;
    //verifichaimo la condizione di vincita
    if (userDiceNumber > computerDiceNumber){
        resault.innerHTML = "Complimenti hai vinto";
    }else if (userDiceNumber === computerDiceNumber){
        resault.innerHTML = "Un bel pareggio";
    }else {
        resault.innerHTML = "Non hai avuto fortuna";
    }
    //tiriamo fuori il risultato nascosto
    resault.classList.remove("d-none");
});
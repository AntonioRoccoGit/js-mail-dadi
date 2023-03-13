// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// array email verificate
const confirmedEmailList = ["antor.1@gmail.com", "angelo.pr98@alice.it", "jhon.lavega@gmail.com", "ale.libbi02@libero.it"];
//chiedere all'utente un email
const userEmail = prompt("Inserire E-mail");
//utiliziamo un flag per verificare l'email
let verified = false;
for (let i = 0; i < confirmedEmailList.length; i++) {
    let confirmedEmail = confirmedEmailList[i];
    //console.log(confirmedEmail);
    if (userEmail.toLowerCase() === confirmedEmail.toLowerCase()){
        verified = true;
    }
}

if (verified) {
     console.log("Benvenuto Nella nostra area riservata");
 } else {
     console.log("La sua e-mail non risulta essere connessa ad un account");
 }
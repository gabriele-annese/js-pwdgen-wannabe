// chiedere nome
const nome = prompt("Come ti chiami?");
// chiedere cognome
const cognome = prompt("Quale é il tuo cognome?");
// chiedere
const colore = prompt("Quale é il tuo colore preferito?");

// BONUS
// creare generatore random numeri da 1 a 100 da aggiungere a password
const random = Math.round(Math.random () * 100);

// crare password
const password = nome + cognome + colore + random;
// stampare su html
document.getElementById('pssw').innerHTML = password ; 


// BONUS BOTTONE GENERATORE
function generaPassword() {
// chiedere sport
const nome = prompt("Che sport ti piace?");
// chiedere cibo
const cognome = prompt("Cibo preferito?");
// chiedere cittá
const colore = prompt("Cittá preferita?");

// generatore random
const random = Math.round(Math.random () * 100);
// crare password
const password = nome + cognome + colore + random;
// stampare su html
document.getElementById('casuale').innerHTML = password ; 
}
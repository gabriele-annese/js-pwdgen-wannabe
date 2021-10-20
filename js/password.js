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

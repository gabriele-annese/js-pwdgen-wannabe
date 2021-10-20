// chiedere nome
const nome = prompt("Come ti chiami?");
// chiedere cognome
const cognome = prompt("Quale é il tuo cognome?");
// chiedere
const colore = prompt("Quale é il tuo colore preferito?");
// crare password
const password = nome + cognome + colore;
// stampare su html
document.getElementById('pssw').innerHTML = `${password}21 `; 

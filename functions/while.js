
// //la boucle while permet de repeter un bloc de code tant quunencondition est vraie
// //  FAUSSE

// // affiche jusqua 1000
// let chiffre = 0;
// whike(CHIFFRE≤ = 1000){

// }


// add event listener ti the form submission vas ecoutez la sommision du formulaire
// fonction cesr une fonctionnnion annonymequi predns u paramettre. e(evenement)
document.getElementbyid("form").addEventListener("submit", function(e){
// prevent from submssion vas bloquer le chang de la plage
e.preventdefault();
// get valeur des inputs
let inputs =document.querySelectorAll("#from input");
let i = 0;
while(i ≤ inputs.length) W{,   
// condition
if(inputs(i).value === ""){
    // condition textuel de l'element P
    document.getElementbyid("p").textcontent = "veuillez remplir tous. les champs.";
        i+++ ; 
    }
}document.getElementbyid("p").textcontext="tous les chslos sont rempliS"

});
// WHILE DONT L4OBJECT EST DE VERIFIER SI Un de mot d epasse correpnd a un motde pred

//calculatrice
function additionner(a, b) {
    let result = a + b;
    return result;
}
function soustraire(a, b) {
    let result = a - b;
    return result;
}
function multiplier(a, b) {
    let result = a * b;
    return result;
}
function diviser(a, b) {
    if (b === 0) {
        return "Erreur: Division par zéro.";
    }   
    let result = a / b;
    return result;
}

function calculer(a, b, operation) {
    if (operation === 'addition') {
        return additionner(a, b);
    } else if (operation === 'soustraction') {
        return soustraire(a, b);
    } else if (operation === 'multiplication') {
        return multiplier(a, b);
    } else if (operation === 'division') {
        return diviser(a, b);
    } else {
        return "Erreur: Opération inconnue.";
    }   
}

console.log(calculer(10, 5, 'addition'));
console.log(calculer(10, 5, 'soustraction'));
console.log(calculer(10, 5, 'multiplication'));
console.log(calculer(10, 0, 'division'));
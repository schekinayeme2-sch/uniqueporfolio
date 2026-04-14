//calculette
function addition(a, b) {
    let result = a + b;
    return result;
}
function soustraire(a, b) {
    let result = a - b;
    return result;
}
function multiplication(a, b) {
    let result = a * b;
    return result;
}
function division(a, b) {
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
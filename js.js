const mots    = ["étudiante en IT",  "En recherchea d'lternante", "Passionée d' IX/UX Designer",    "Future développeuse web"];
const couleurs = ["#9333ea",   "#e11d48",    "#0ea5e9",        "#16a34a"];
let i = 0;

const el = document.getElementById("typing");

function afficher() {
  // Met le texte et la couleur
  el.textContent = mots[i];
  el.style.color = couleurs[i];

  // Entrée : glisse vers le haut
  el.classList.remove("hidden");
  el.classList.add("visible");

  // Après 2 secondes, sortie
  setTimeout(sortir, 1000);
}

function sortir() {
  el.classList.remove("visible");
  el.classList.add("hidden");

  // Après la transition, passe au mot suivant
  setTimeout(() => {
    i = (i + 1) % mots.length;
    afficher();
  }, 300); // correspond à la durée de la transition CSS
}

afficher();
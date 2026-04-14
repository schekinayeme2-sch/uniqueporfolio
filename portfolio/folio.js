// // 1. On sélectionne les éléments
// const menuBtn = document.querySelector('.menu_btn');
// const nav = document.querySelector('.nav');

// // 2. On écoute le clic
// menuBtn.addEventListener('click', () => {
    
//     // A. On ouvre ou ferme le menu (ajout/retrait de la classe active)
//     nav.classList.toggle('active');

//     // B. On change l'icône
//     if (nav.classList.contains('active')) {
//         // Si le menu est ouvert, on met la Croix
//         menuBtn.innerHTML = "&times;"; 
//     } else {
//         // Sinon, on remet le Burger
//         menuBtn.innerHTML = "&#9776;"; 
//     }
// });
// Sélection des éléments HTML
const menuBtn = document.querySelector('.menu_burger');
const menuIcon = document.querySelector('.menu_burger i');
const dropDownMenu = document.querySelector('.burger_menu');

menuBtn.onclick = function () {
    // 1. Basculer la classe 'open' sur le menu
    dropDownMenu.classList.toggle('open');

    // 2. Vérifier si le menu est ouvert
    const isOpen = dropDownMenu.classList.contains('open');

    // 3. Changer l'icône (Barres <-> Croix)
    menuIcon.className = isOpen 
        ? 'fa-solid fa-xmark' 
        : 'fa-solid fa-bars';
};
// hamburgarmenyn

// när skärmen på webbläsaren går under ett viss mått, så anpassas webbsidan till mobilt läge

// den här funktionen gör så att den selekterande menyn inte syns
function closeMenu() {
    menu.style.display = 'none';
}

// den här funktionen gör så att den selekterande menyn syns
function openMenu() {
    menu.style.display = 'block';
}

// eventet triggar igång denna funktion
function expandButton() {

    // hämtar hamburgarens attribut och sparar det i en variabel
    var isOpened = hamburgerButton.getAttribute('aria-expanded');

    // kollar värdet på atttributet
    if (isOpened === 'false') {
        hamburgerButton.setAttribute('aria-expanded', 'true');
        openMenu();
    } else {
        hamburgerButton.setAttribute('aria-expanded', 'false');
        closeMenu();
    }
}

// buggfixet som kollar om hamburgaknappen är synlig eller inte och ändrar då menyns exponering
function isItOpen(){

    // hämtar hamburgarens displayvärde och sparar det i en variabel
    var display = window.getComputedStyle(hamburgerButton).display;

    // kollar om displayvärdet är "none" och utför beroende på läget
    if(display === "none"){
        openMenu();
    } else{
        // Syns knappen, så ändras knappen till hamburgaren och menyn syns inte
        hamburgerButton.setAttribute('aria-expanded', 'false');
        closeMenu();
    }
}

// den selekterande menyn
var menu = document.getElementById('menu');

// selekterar hamburgarknappen
var hamburgerButton = document.getElementById('hamburger');

// det som triggar igång eventet
window.addEventListener("resize", isItOpen);

// tilldelar ett addEventListiner
hamburgerButton.addEventListener('click', expandButton);


// Validerad 27/7 2023 med JSHint

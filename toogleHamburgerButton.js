// hamburgarmenyn

// när skärmen på webbläsaren går under ett viss mått, så anpassas webbsidan till mobilt läge

// den här funktionen gör så att den selekterande menyn inte syns
function closeMenu() {
    menu.style.display = 'none'
}

// ETT PROBLEM tog upp all min fokus då jag upptäckte en bugg
// Buggen var att jag hade satt en media-querrie på själva länk-menyn, som ändrade synligheten från synlig(grid)
// till none. Men när jag förstorade skärmen, så försvann länk-menyn
// det är bara för att jag styr länk-menyn om den ska synas eller inte med javascript. och eftersom javascript
// Skriver över csss så skrves även min media querrie.
// så min lösning är att jag fick helt enkelt skapa en if-statement som kollar ifall hamburgarknappen är synlig eller inte, det funkade inte


// den här funktionen gör så att den selekterande menyn syns
function openMenu() {
    menu.style.display = 'block'
}

// den selekterande menyn
const menu = document.getElementById('menu')

// vi selekterar hamburgarknappen
const hamburgerButton = document.getElementById("hamburger")

hamburgerButton.addEventListener('click', ()=>{
    const isOpened = hamburgerButton.getAttribute('aria-expanded')
    if(isOpened === 'false'){
        hamburgerButton.setAttribute('aria-expanded', 'true')
        openMenu();
    } else {
        hamburgerButton.setAttribute('aria-expanded', 'false')
        closeMenu();
    }
})

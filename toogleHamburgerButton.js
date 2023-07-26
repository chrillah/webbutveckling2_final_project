// hamburgarmenyn

// när skärmen på webbläsaren går under ett viss mått, så anpassas webbsidan till mobilt läge

// den här funktionen gör så att den selekterande menyn inte syns
function closeMenu() {
    menu.style.display = 'none'
}

// den här funktionen gör så att den selekterande menyn syns
function openMenu() {
    menu.style.display = 'grid'
}

// den selekterande menyn
const menu = document.getElementById('menu')

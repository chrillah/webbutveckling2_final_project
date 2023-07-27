function playSound(e) {
    // e betyder att ett event har hänt och den registreras för att trigga något
    // vi selecterar audio-elementet med dataattributets tangentkod
    // vi låter e, vilket triggas av en tangentnedtryckning, koppla key code med rätt tanget så att ljudet som är kopplat till key code kan spelas upp
    // vi använder backticks så att vi kan sammanfoga tangentkoden
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // här selekterar vi själva tangenten för att kunna applicera en klass för att animera knappnedtryckningen
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //  vi använder ett if-statement som kollar så att den tangent vi rycker ner är kopplat till en aduio-element.
    // om det inte finns en audio-element, stoppar if-statement funktionen
    if (!audio) return;

    // Varje ljud tillåts att spela en gång, därefter slutar ljudet att låta
    // för att tillåta ljudet spela flera än en gång, måste man starta om
    audio.currentTime = 0;

    // denna funktion finns inbyggd i javascript och tillåter att ljud hörs
    audio.play();

    // vi lägger till klassen "playing" som gör att knappen animeras
    // denna klass har en transition, en övergång. En egenskap som möjliggör animation
    key.classList.add('playing');
}
// funktion som körs när en övergång är på väg att ta slut
function removeTransition(e) {
    // om en tangentknapp inte innehåller en övergång med egenskapen transform,
    // så skippar if-statement detta
    if (e.propertyName !== 'transform') return;

    // this är en nyckelord i Javscript som refererar till en specifik variabel.
    // i detta fall, så pekar Javascript på just den tangent som är aktiv
    // på så sätt kan vi då kunna ta bort klassen playing från just den tangenten
    this.classList.remove('playing');
}

// vi selekterar alla tangenter med klassen "key"
var keys = document.querySelectorAll('.key');
// här använder vi en foreach-loop, en loop som främst används för att loopa igenom arrayer, listor och object
// Vi ska lägga till en event som heter transitionend, ett event som triggas när en övergång är slut
// vi loopar och lägger till en addEventListener, som triggar igång ett event när en transition är över, och då körs funktionen removeTransition
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

// här så lyssnar javascript efter events tangentnedtryckningar.
// denna event triggas nu av tangentnedtryckningar.
// vi skickar vad som ska triggas med en funktion som ger oss ett event
window.addEventListener('keydown', playSound);


// Validerad 27/7 2023 med JSHint - "klagade" på att jag använde template literals och arrow-funktion
